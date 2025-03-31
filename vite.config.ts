import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true, // Enable global `expect` without explicit import
    environment: 'jsdom', // Needed for React components
    setupFiles: './test/setup.ts', // Optional: if you need extra setup
  },
})
