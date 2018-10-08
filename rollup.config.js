import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import packageJson from './package.json'
import resolve from 'rollup-plugin-node-resolve'
import { terser as uglify } from 'rollup-plugin-terser'
var inputFile = 'lib/index.js'

let config = [
  {
    input: inputFile,
    output: {
      file: packageJson.amd,
      format: 'amd',
      amd: {
        id: packageJson.name
      }
    },
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      commonjs(),
      json({
        preferConst: true,
        indent: '  '
      }),
      resolve({
        customResolveOptions: {
          moduleDirectory: 'node_modules'
        }
      })
    ]
  },
  {
    input: inputFile,
    output: {
      file: packageJson.main,
      format: 'cjs'
    },
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      json({
        preferConst: true,
        indent: '  '
      }),
      resolve({
        customResolveOptions: {
          moduleDirectory: 'node_modules'
        }
      })
    ]
  },
  {
    input: inputFile,
    output: {
      file: packageJson.module,
      format: 'esm'
    },
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      json({
        preferConst: true,
        indent: '  '
      }),
      resolve({
        customResolveOptions: {
          moduleDirectory: 'node_modules'
        }
      })
    ]
  },
  {
    input: inputFile,
    output: {
      file: packageJson.browser,
      format: 'iife',
      name: packageJson.name.replace(/-/g, '_')
    },
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      commonjs(),
      json({
        preferConst: true,
        indent: '  '
      }),
      resolve({
        customResolveOptions: {
          moduleDirectory: 'node_modules'
        }
      })
    ]
  }
]

if (process.env.BUILD === 'production') {
  for (let i = 0; i < config.length; i++) {
    config[i].plugins.push(
      uglify({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false
        }
      })
    )

    if (Object.prototype.toString.call(config[i].output) === '[object Array]') {
      for (let j = 0; j < config.length; j++) {
        config[i].output[j].sourcemap = true
      } // End of for loop.
    } else {
      config[i].output.sourcemap = true
    } // Endif.
  } // End of for loop.
} // Endif.

export default config
