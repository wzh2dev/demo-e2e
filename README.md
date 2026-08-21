# Playwright E2E 项目骨架

这是一个基于 TypeScript 的最小 Playwright 端到端测试项目，默认覆盖 Chromium、Firefox 和 WebKit。

## 快速开始

```bash
cp .env.example .env
npm install
npx playwright install
npm test
```

默认测试 `https://playwright.dev`。把 `.env` 中的 `BASE_URL` 改成待测环境地址后，即可使用相对路径编写测试。

## 常用命令

```bash
npm test                 # 运行全部浏览器测试
npm run test:chromium    # 仅运行 Chromium
npm run test:headed      # 显示浏览器运行
npm run test:debug       # 调试模式
npm run test:ui          # 打开 Playwright UI
npm run typecheck        # TypeScript 类型检查
npm run report           # 查看最近一次 HTML 报告
```

## 目录结构

```text
tests/
├── e2e/                 # 测试用例
└── pages/               # 页面对象，封装定位器和页面操作
```

新增测试时优先使用 `getByRole`、`getByLabel` 等面向用户的定位方式，并使用 Playwright 的自动等待断言；不要加入固定时间等待。
