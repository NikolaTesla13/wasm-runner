import { copyFileSync, readdirSync } from "fs";
import { resolve } from "path";
import { defineConfig } from "vite";
import * as vite from "vite";
import { PluginOptions } from "vite-plugin-dts";

const copyToExample = (options?: PluginOptions): vite.Plugin => {
  return {
    name: "copyToExample",
    closeBundle: () => {
      const build = "./dist/main.js";
      const example = "./example/wasm-runner.js";
      copyFileSync(build, example);
      // readdirSync("public").forEach((file) => {
      //   copyFileSync(`./public/${file}`, `./example/${file}`);
      // });
      console.log(`copied bundle to example`);
    },
  };
};

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "Wasm Runner",
      fileName: "main",
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
  plugins: [copyToExample()],
});
