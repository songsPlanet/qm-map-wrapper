import path from 'path';
import chalk from 'chalk';
import { rollup } from 'rollup';
import { fileURLToPath } from 'url';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import replaceLessToCss from './rollup-plugin-less2css.js';

const context = fileURLToPath(new URL('../', import.meta.url));
const extensions = ['.tsx', '.ts', '.jsx', '.js', '.mjs', '.cjs'];

const inputOptions = {
  input: path.resolve(context, "mapboxgl/index.ts"),
  external: [/[\\/]node_modules[\\/]/, /\.less/, /\.css/],
  makeAbsoluteExternalsRelative: false,
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript(),
    babel({
      extensions,
      babelHelpers: "runtime",
      exclude: /[\\/]node_modules[\\/]/,
    }),
    replaceLessToCss(),
  ],
};

const outputOptions = {
  format: "es",
  preserveModules: true,
  preserveModulesRoot: "mapboxgl",
  dir: path.resolve(context, "es"),
};

export default async function build() {
  let bundle = null;
  try {
    bundle = await rollup(inputOptions);
    await bundle.write(outputOptions);
  } catch (error) {
    const msg = error.stack.replace(/^\b/gm, '   ');
    process.stdout.write('\n');
    process.stdout.write(chalk.red(msg));
    process.stdout.write('\n');
    throw error;
  }

  await bundle.close();
  process.stdout.write(chalk.green('rollup 打包成功\n'));
}
