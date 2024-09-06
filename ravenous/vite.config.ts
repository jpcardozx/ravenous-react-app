// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.foursquare.com',  // Agora, direcionando para o Foursquare
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')  // Remove o /api do caminho
      }
    }
  }
});
