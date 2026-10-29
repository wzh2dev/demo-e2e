import { defineConfig, devices, PlaywrightTestConfig } from '@playwright/test'
import { baseUrl } from 'src/config/env'

const config: PlaywrightTestConfig = {
  testDir: './src/specs/web',
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
      use: { ...devices['Desktop Chrome'] }
    }
  ]
}

export default defineConfig(config)
