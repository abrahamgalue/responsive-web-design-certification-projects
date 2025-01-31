// @ts-check
import { test, expect } from '@playwright/test'

const URL = 'https://product-landing-page-abraham.netlify.app/'

test('has title', async ({ page }) => {
  await page.goto(URL)

  await expect(page).toHaveTitle(/Product Landing Page/)
})