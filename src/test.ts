import { test } from '@playwright/test';

test('打开百度并搜索今天天气', async ({ page }) => {
  // 1. 打开百度首页
  await page.goto('https://www.baidu.com/');

  // 2. 在可见搜索框（新版 AI 搜索框）输入关键词
  await page.locator('#chat-textarea').fill('今天天气');

  // 3. 点击"百度一下"发起搜索，并等待携带关键词的搜索请求发出
  const searchRequest = page.waitForRequest(
    (req) => req.url().includes('/s?') && req.url().includes('wd=%E4%BB%8A%E5%A4%A9%E5%A4%A9%E6%B0%94'),
  );
  await page.locator('#chat-submit-button').click();
  await searchRequest;
});
