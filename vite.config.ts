import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      rollupTypes: true,
      tsconfigPath: "./tsconfig.app.json",
    }),
    cssInjectedByJsPlugin({ useStrictCSP: true, relativeCSSInjection: false }),
  ],
  build: {
    lib: {
      name: "vue3-use-modal",
      entry: path.resolve(__dirname, "src/index.ts"),
      fileName: (format) => `vue3-use-modal.${format}.js`,
    },
    emptyOutDir: true,
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
