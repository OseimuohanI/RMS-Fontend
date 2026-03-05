import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './resources/js'),
      '@inertiajs/react': path.resolve(__dirname, './resources/js/microservice/inertia.tsx'),
      '@inertiajs/react/server': path.resolve(__dirname, './resources/js/microservice/inertia-server.ts'),
      'laravel-vite-plugin/inertia-helpers': path.resolve(__dirname, './resources/js/microservice/inertia-helpers.ts'),
      'ziggy-js': path.resolve(__dirname, './resources/js/microservice/ziggy.ts'),
    },
  },
});
