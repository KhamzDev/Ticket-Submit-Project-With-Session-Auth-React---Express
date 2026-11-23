import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'force-full-reload',
      handleHotUpdate({ server }) {
        server.ws.send({ type: 'full-reload' }) // Forces browser hard refresh on save
        return []
      },
    },
  ],
})

