import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    exclude: ['maplibre-gl'],
    esbuildOptions: {
      target: 'es2022'
    }
  },
  build: {
    target: 'es2022'
  }
})