import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsonImporter from "node-sass-json-importer"

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        importer: jsonImporter(),
      }
    }
  },
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => {
          return tag.startsWith('s-')
        }
      }
    }
  })],
  server:{
    host: true,
    port: 8000,
    watch: {
      usePolling: true
    }
  }
})
