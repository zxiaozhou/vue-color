import {
  projectRoot, plugins, output, external,
} from './build.config';

const input = `${projectRoot}/index.js`;

const basePlugins = [
  plugins.alias,
  plugins.vue,
  plugins.resolve,
  plugins.replace,
  plugins.commonjs,
];

export default [
  {
    input,
    output: {
      format: 'esm',
      file: 'dist/index.js',
      globals: output.globals,
    },
    plugins: [
      ...basePlugins,
      plugins.postcss(),
    ],
    external,
  },
  {
    input,
    output: {
      format: 'iife',
      file: 'dist/index.min.js',
      exports: 'named',
      name: output.name,
      globals: output.globals,
    },
    plugins: [
      ...basePlugins,
      plugins.postcss(),
      plugins.terser,
    ],
    external,
  },
];