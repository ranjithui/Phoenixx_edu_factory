import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    // Use polling instead of native fs.watch. On Windows, native watching
    // crashes with EBUSY when a media file is dropped into a watched folder
    // while it's still being copied/locked. Polling is immune to that.
    watch: {
      usePolling: true,
      interval: 300,
    },
  },
})
