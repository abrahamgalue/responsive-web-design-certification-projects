// @ts-check
import { test, expect } from '@playwright/test'

const URL = 'https://technical-documentation-abraham.netlify.app/'

test('can navigate', async ({ page }) => {
  await page.goto(URL)

  await page.getByRole('link', { name: 'Agrupaciones' }).click();

  await expect(page.locator('header').filter({ hasText: 'Agrupaciones' })).toBeVisible()
})