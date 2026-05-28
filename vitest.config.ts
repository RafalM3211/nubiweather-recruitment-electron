import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    css: true,
    setupFiles: ['./src/renderer/vitest.setup.ts'],
    include: ['src/renderer/**/*.test.{ts,tsx}'],
  },
});
