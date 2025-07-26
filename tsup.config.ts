import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/**/*.ts', '!src/**/*.spec.ts', '!src/**/*.spec-d.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  bundle: false,
  treeshake: true,
})
