import { defineConfig, devices, PlaywrightTestConfig } from '@playwright/test'
import { baseUrl } from 'src/config/env'

const config: PlaywrightTestConfig = {
  testDir: './src',
  testMatch: /.*(test|spec)\.ts/,

  // Reporter to use
  reporter: 'allure-playwright',
  use: {
    baseURL: baseUrl,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    headless: false
  },

  projects: [
    {
      name: 'web',
      use: { ...devices['Desktop Chrome'] },
      testDir: './src/specs/web',
      testMatch: /.*(test|spec)\.ts/
    }
  ]
}

export default defineConfig(config)
