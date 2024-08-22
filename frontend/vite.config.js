import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://scaling-doodle-p57wgp4w7wrcrpqq-3000.app.github.dev',
  //       changeOrigin: true,
  //       // secure: false, // If you are working with self-signed certificates
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     },
  //   },
  // },
  // server: {
  //   proxy: {
  //     '/api': 'https://scaling-doodle-p57wgp4w7wrcrpqq-3000.app.github.dev'
  //   }
  // },
  plugins: [react()],

})
