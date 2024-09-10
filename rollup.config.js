import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import { svelteSVG } from "rollup-plugin-svelte-svg";
import url from "@rollup/plugin-url";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import css from "rollup-plugin-css-only";
import image from '@rollup/plugin-image';

const production = !process.env.ROLLUP_WATCH;
export default {
  // This `main.js` file we wrote
  input: "lib/index.ts",
  output: {
    // The destination for our bundled JavaScript
    file: "public/build/bundle.js",
    // Our bundle will be an Immediately-Invoked Function Expression
    format: "iife",
    // The IIFE return value will be assigned into a variable called `app`
    name: "app",
    sourcemap: true,
  },
  plugins: [
    svelte({
      // Tell the svelte plugin where our svelte files are located
      //   include: "lib/**/*.svelte",
      compilerOptions: {
        customElement: true,
      },
    }),
    // css({ output: "bundle.css" }),

    url({
      include: ["**/*.svg"], // 处理 SVG 文件
      limit: 0, // 将所有 SVG 作为文件引入，而不是 base64 编码
    }),
    image(),
    typescript(),
    commonjs(),
    // Tell any third-party plugins that we're building for the browser
    resolve({
      browser: true,
      exportConditions: ["svelte"],
      extensions: [".svelte"],
    }),
    production && terser(),
  ],
};
