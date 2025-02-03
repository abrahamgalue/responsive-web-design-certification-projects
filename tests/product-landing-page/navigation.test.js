// @ts-check
import { test, expect } from '@playwright/test'

const URL = 'https://product-landing-page-abraham.netlify.app/'

test('can navigate to original page', async ({ page }) => {
  await page.goto(URL)

  const popupPromise = page.waitForEvent('popup')

  await page.getByRole('link', { name: 'header logo shure' }).click()

  const originalPage = await popupPromise

  await expect(originalPage.url()).toContain('www.shure.com')
})