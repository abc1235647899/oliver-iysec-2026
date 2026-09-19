import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative asset paths so the build works on GitHub Pages project sites
  // and Vercel alike without a hardcoded base path.
  base: './',
  preview: {
    // Allow localtunnel / ngrok hosts when sharing a phone preview
    allowedHosts: true,
    host: true,
  },
  server: {
    allowedHosts: true,
  },
})
