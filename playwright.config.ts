import { defineConfig, devices, PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  // Look for test files in the "src" directory, relative to this configuration file.
  testDir: './src',

  testMatch: /.*(test|spec)\.ts$/,

  // Reporter to use
  reporter: 'allure-playwright',

  use: {
    // Collect trace when retrying the failed test.
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },

  // Configure projects for major browsers.
  projects: [
    {
      name: 'web',
      use: { ...devices['Desktop Chrome'] },
    }
  ]
}

export default defineConfig(config)
