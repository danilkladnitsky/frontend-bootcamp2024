import { defineConfig } from 'vite'
import sass from "sass";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    extensions: ['.css'],
    esbuildOptions: {
      plugins: [
        (await import('esbuild-sass-plugin')).sassPlugin({
          type: 'style',
        }),
      ],
    },
  },
})
