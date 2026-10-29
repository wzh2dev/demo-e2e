import dotenv from 'dotenv'
import { resolve } from 'node:path'

dotenv.config({ quiet: true, path: resolve(process.cwd(), '.env') })

export const baseUrl = process.env.PLAYWRIGHT_BASE_URL ?? 'https://xin.asiainfo.com/zh'
export const username = process.env.PLAYWRIGHT_USERNAME ?? 'admin@example.com'
export const password = process.env.PLAYWRIGHT_PASSWORD ?? 'password'
