import { expect, test } from 'src/fixtures/auth'

test.describe('Registration', () => {
  test('已登录可直接访问', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/信部落/)
    await expect(page).not.toHaveURL(/login/)
  })

  test('未登录访问注册页', async ({ page }) => {
    await page.goto('/register')
    await expect(page).toHaveTitle(/注册 - 信部落/)
  })
})
