const resolve = require("@rollup/plugin-node-resolve").nodeResolve;
const alias = require("@rollup/plugin-alias");
const path = require("path");
export default [
  {
    input: path.join(__dirname, "out-es6/src/browser/public/Terminal.js"),
    output: {
      file: "./dist/es6/xterm.js",
      format: "esm", // umd
      sourcemap: true,
    },
    plugins: [
      resolve(),
      alias({
        entries: [
          { find: /^common\/(.*)/, replacement: "./out-es6/src/common/$1.js" },
          { find: /^browser\/(.*)/, replacement: "./out-es6/src/browser/$1.js" },
        ],
      }),
    ],
  },
  {
    input: path.join(__dirname, "out-es6/addons/xterm-addon-fit/src/FitAddon.js"),
    output: {
      file: "./dist/es6/addons/FitAddon.js",
      format: "esm", // umd
      sourcemap: true,
    },
    plugins: [resolve()],
  },
];
