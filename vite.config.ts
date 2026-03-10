import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// When deploying to GitHub Pages the app lives under
// https://<username>.github.io/AgriSaathi/, so assets
// and the router need to use that base path.  The
// `base` option tells Vite to prefix built asset URLs
// with the repository name.  Without it you end up with
// 404s and ultimately a blank page.
export default defineConfig({
  base: '/AgriSaathi/',
  plugins: [react()],
})
