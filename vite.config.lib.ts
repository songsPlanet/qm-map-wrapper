import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import libcss from 'vite-plugin-libcss';
import path from 'path';
import { fileURLToPath } from 'url';
import presetEnv from 'postcss-preset-env';

const __dirname = fileURLToPath(new URL('./', import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libcss(),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, './mapboxgl'),
    },
  },
  css: {
    postcss: {
      plugins: [presetEnv],
    },
    preprocessorOptions: {
      less: {
        modifyVars: {
          themeColor: '#6C69FF',
        },
        globalVars: {},
        additionalData: '',
        javascriptEnable: true,
      },
    },
    devSourcemap: false,
  },
  build: {
    outDir: 'lib',// 自定义构建的输出目录
    cssMinify: true,
    minify: 'terser',
    emptyOutDir: true,
    cssCodeSplit: true,
    copyPublicDir: true,
    sourcemap: 'hidden',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    lib: {
      entry: './mapboxgl/index.ts', // 入口文件路径
      name: "qm-map-wrapper",
      fileName: 'qm-map-wrapper',
    },
  },
});
