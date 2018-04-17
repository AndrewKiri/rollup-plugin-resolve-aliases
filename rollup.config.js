import pkg from './package.json';
import babel from 'rollup-plugin-babel'
import cjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' },
  ],
  external: Object.keys(pkg.dependencies).concat([
    'path',
    'fs',
    'os',
  ]),
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [['es2015', { modules: false }], 'stage-0'],
      plugins: ['external-helpers']
    }),
    cjs({
      exclude: 'node_modules/process-es6/**',
    }),
    globals(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    resolve({
      module: true,
      main: true
    })
  ]
};
