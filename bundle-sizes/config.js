import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import { bundleStats } from 'rollup-plugin-bundle-stats'
import {visualizer} from 'rollup-plugin-visualizer'
/**
 * @param {string} name - The name of the config
 * @returns {import('rollup').RollupOptions}
 */
export const createConfig = (name) => ({
  input: `./${name}/main.ts`,
  output: {
    file: `./${name}/bundle.js`,
    format: `esm`,
    sourcemap: false,
  },
  plugins: [
    nodeResolve({
      preferBuiltins: true,
    }),
    typescript(),
    terser({
      compress: {
        passes: 2,
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_methods: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true,
      },
      mangle: true,
    }),
    visualizer({
      title: `Graffle Bundle Size: ${name}`,
      gzipSize: true,
      brotliSize: true,
      filename: `./${name}/bundle-visualization.html`,
    }),
    bundleStats({
      outDir: `./${name}`,
      baseline: true,
      json: true,
      html: true,
      compare: true,
    }),
  ],
  treeshake: {
    moduleSideEffects: false,
    propertyReadSideEffects: false,
    tryCatchDeoptimization: false,
    unknownGlobalSideEffects: false,
  },
})
