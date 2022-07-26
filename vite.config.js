// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target:"es5",
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "index",
      fileName: "index",
    },
    rollupOptions: {
      external: ["jquery"],
      output: {
        globals: {
          jquery: "jquery",
        },
      },
    },
  },
});
