import react from '@vitejs/plugin-react'
import path from "path"
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(), 
    svgr({
      include: '**/*.svg?react',
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5171,
  },
})
