import * as path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    lib: {
      // 模块入口，默认是index.html作为入口的
      entry: path.resolve(__dirname, './lib'),
      // 全局变量名
      name: 'ReactTestModule',
      // 文件名
      fileName: 'react-test-module',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react', 'react-dom'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'React',
          ['react-dom']: 'ReactDOM',
        }
      }
    }
  },
  plugins: [react()],
})
