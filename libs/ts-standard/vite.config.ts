import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: { entry: resolve(__dirname, 'src/index.ts'), formats: ['es'] },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [dts({
    tsconfigPath: 'tsconfig.vite.json',
  })],
  test: {
    coverage: {
      exclude: [
        'ex',
        'dist',
        'vite.config.ts'
      ],
      thresholds: {
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100
      }
    }
  },
})
