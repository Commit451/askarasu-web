import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { mkdirSync, writeFileSync, readFileSync } from 'fs'

// GitHub Pages returns 404 for client-side routes unless they have a real entrypoint.
// Keep the SPA fallback, but serve known public pages with HTTP 200 for store reviews.
const staticRoutes = ['privacy', 'terms', 'share', 'support']
const copy404Plugin = () => ({
  name: 'copy-static-route-entrypoints',
  closeBundle() {
    const outputDir = resolve(__dirname, 'dist')
    const html = readFileSync(resolve(outputDir, 'index.html'))
    writeFileSync(resolve(outputDir, '404.html'), html)
    for (const route of staticRoutes) {
      const routeDir = resolve(outputDir, route)
      mkdirSync(routeDir, { recursive: true })
      writeFileSync(resolve(routeDir, 'index.html'), html)
    }
  }
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), copy404Plugin()],
})
