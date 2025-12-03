import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './resources'),
    },
  },
  root: path.resolve(__dirname, './resources'),
  build: {
    outDir: path.resolve(__dirname, './public/dist'),
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    strictPort: false,
  },
});
