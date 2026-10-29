import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    name: 'e2e:server',
    include: ['src/specs/server/**/*.test.js'],
  }
})
