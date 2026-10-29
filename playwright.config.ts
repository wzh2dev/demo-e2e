import { defineConfig, devices, PlaywrightTestConfig } from '@playwright/test'
import dotenv from 'dotenv'
import { resolve } from 'node:path'

dotenv.config({ quiet: true, path: resolve(process.cwd(), '.env') })

export const playwrigteBaseUrl = process.env.PLAYWRIGHT_BASE_URL ?? 'http://127.0.0.1:2285'
export const playwrigteUsername = process.env.PLAYWRIGHT_USERNAME ?? 'admin'
export const playwrigtePassword = process.env.PLAYWRIGHT_PASSWORD ?? '123456'

const config: PlaywrightTestConfig = {
  testDir: './src/specs/web',
  testMatch: /.*(test|spec)\.ts/,

  // Reporter to use
  reporter: 'allure-playwright',
  use: {
    baseURL: playwrigteBaseUrl,
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
