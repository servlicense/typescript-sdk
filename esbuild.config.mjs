// @ts-check

/** @type {import ("esbuild").BuildOptions[]} */
const configs = [
  {
    entryPoints: ["./src/index.ts"],
    bundle: true,
    outfile: "./dist/index.js",
    packages: "external",
    platform: "node",
    format: "esm",
  },
];
export default configs;
