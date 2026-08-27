import { defineConfig } from "allure"

export default defineConfig({
    name: "Playwright E2E 测试报告",
    output: "./allure-report",

    historyPath: "./allure-history.jsonl",

    plugins: {
        awesome: {
            options: {
                reportName: "自动化测试报告",
                reportLanguage: "en",
                singleFile: false
            }
        }
    }
})
