import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Fully static build. `base: './'` keeps asset URLs relative so the same
// `dist/` output works on GitHub Pages project sites, custom domains, or
// any other static host without rebuilding.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2020',
    cssTarget: 'chrome90',
    assetsInlineLimit: 2048,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        // Matches `react-dom/client` and `scheduler` too, which a plain
        // `['react', 'react-dom']` id list misses because those resolve to
        // their own entry files. Without this the whole of React DOM lands in
        // the app chunk and this split does nothing.
        manualChunks(id) {
          if (/[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/.test(id)) {
            return 'react';
          }
          return undefined;
        },
      },
    },
  },
});