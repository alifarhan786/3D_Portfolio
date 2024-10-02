import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Adjust the warning limit (in kilobytes)
    chunkSizeWarningLimit: 2000, // Adjust this value as needed
  },
});
