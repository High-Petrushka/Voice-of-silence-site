import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: "https://high-petrushka.github.io/Voice-of-silence-site/",
  plugins: [vue()],
})
