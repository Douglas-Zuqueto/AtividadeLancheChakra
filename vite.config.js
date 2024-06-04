import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: 'src/index.html'
      }
    }
  },
  plugins: [react()],
});
