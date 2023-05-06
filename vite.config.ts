import { defineConfig } from 'vite'
import { resolve } from "path";
import vue from '@vitejs/plugin-vue'
// const path = require('path');
export default defineConfig({
  base: process.env.GITHUB_PAGES  // この行を追加
    ? "VueQuest"            // この行を追加
    : "./",                     // この行を追加
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        404: resolve(__dirname, '404.html'),
      },
      // output: {
      //   dir: 'dist',
      //   assetFileNames: 'assets/[name][extname]'
      // }
    }
  }
})
