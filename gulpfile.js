import fs from 'fs';
import path from 'path';
import gulp from 'gulp';
import less from 'gulp-less';
import babel from 'gulp-babel';
import base64 from 'gulp-base64';
import postcss from 'gulp-postcss';
import { fileURLToPath } from 'url';
import child_process from 'child_process';
import buildRollup from './config/rollup.config.lib.js';

const context = fileURLToPath(new URL('./', import.meta.url));

function cleanOutputDir(cb) {
  try {
    fs.rmSync(path.resolve(context, 'lib'), { force: true, recursive: true });
    fs.rmSync(path.resolve(context, 'es'), { force: true, recursive: true });
    cb();
  } catch (error) {
    cb(error);
  }
}

// 打包构建 ESM 模块，这里使用的 rollup 工具进行构建
async function buildEs() {
  await buildRollup();
}

// 打包构建 commonjs 模块
function buildLib() {
  return gulp
    .src(["es/**/*.js"])
    .pipe(babel({ configFile: "./babel.config.lib.cjs" }))
    .pipe(gulp.dest("./lib"));
}

// 执行有关生成 .d.ts 文件相关的任务
const tscTask = gulp.series(
  function compileTs() {
    return new Promise((resolve, reject) => {
      child_process.exec('npx tsc -p tsconfig.lib.json', (error, stdout, stderr) => {
        if (error) reject(new Error(`Exec error: ${error}`));
        if (stderr) console.error(`stderr: ${stderr}`);
        resolve();
      });
    });
  },
  function moveDts() {
    return gulp.src(['dist/**/*.d.ts']).pipe(gulp.dest('lib')).pipe(gulp.dest('es'));
  },
  function cleanupDtsDir(cb) {
    const dtsDir = path.resolve(context, "dist");
    if (fs.existsSync(dtsDir)) {
      fs.rmSync(dtsDir, { force: true, recursive: true });
    }
    cb();
  },
);

// 生成样式、以及相关的资源
function buildStyleSheet() {
  return gulp
    .src(["mapboxgl/**/*.less"])
    .pipe(less())
    .pipe(postcss())
    .pipe(base64())
    .pipe(gulp.dest("es"))
    .pipe(gulp.dest("lib"))
}

export default gulp.series(
  cleanOutputDir,
  buildEs,
  buildLib,
  tscTask,
  buildStyleSheet
);
