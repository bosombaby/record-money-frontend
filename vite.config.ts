import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import viteCompression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'

export default defineConfig({
  base: '/record-money/',
  plugins: [react(), viteCompression()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        visualizer({
          open: false,
          template: 'treemap',
          gzipSize: true,
          brotliSize: true,
        }),
      ],
    },
  },
  server: {
    proxy: {
      '/record-money/api': {
        target: 'http://xxx',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/record-money\/api/, ''),
      },
    },
  },
})
