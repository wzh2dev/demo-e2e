import { expect, test } from 'src/fixtures/auth'

test('已登录可直接访问', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/信部落/)
  await expect(page).not.toHaveURL(/login/)
})
