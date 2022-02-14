import { defineConfig } from "vite"
import path from "path"
import react from "vite-preset-react"
import svgr from "vite-plugin-svgr"

export default defineConfig({
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src", "styles")}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/utils/globalUtils";`,
      },
    },
  },
  plugins: [react({ removeDevtoolsInProd: true }), svgr()],
})
