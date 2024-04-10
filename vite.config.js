import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  /* server: {
    // host: 'localhost',
    // port: 8088,
    cors: true,
    proxy: { // 配置跨域
      '/api': {
          // 用.env变量配置跨越
          target: 'https://systemjs.1688.com/',
          ws: true,  // 是否启用websockets
          changOrigin: true,  // 开启代理，在本地创建一个虚拟服务端
          pathRewrite: {
            '^/api': ''
          }
      }
    },
  }, */
})
