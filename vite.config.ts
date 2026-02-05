import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  base: '/', // ensures output paths are correct
  build: {
    outDir: 'dist', // default, but set explicitly
  },
});

