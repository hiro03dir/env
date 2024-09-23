import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'common-components',
      fileName: (format) => `common-components.${format}.js`
    },
    rollupOptions: {
      external: ['vue', 'tailwind'],
      output: {
        globals: {
          vue: 'Vue',
          tailwindcss: 'tailwindcss'
        }
      }
    }
  },
  plugins: [vue()],
});
