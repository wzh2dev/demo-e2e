import { test as base, expect } from '@playwright/test'
import { password, username } from 'src/utils'

export const test = base.extend({
  page: async ({ page }, use) => {
    await page.goto('/')
    await page.getByPlaceholder('请输入您的NT账号').fill(username)
    await page.getByPlaceholder('请输入您的密码').fill(password)
    await page.getByText('立即登录').click()

    await page.waitForFunction(() => !!sessionStorage.getItem('token'), { timeout: 120_000 })

    await use(page)
  }
})

export { expect }
