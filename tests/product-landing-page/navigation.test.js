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

test('can navigate through the page', async ({ page }) => {
  await page.goto(URL)

  await page.getByRole('link', { name: 'Features' }).click()
  await expect(page.getByRole('heading', { name: 'Your Vocal MVP' })).toBeVisible()

  await page.getByRole('link', { name: 'Images' }).click()
  await expect(page.locator('figure').filter({ hasText: 'How Vocals Should Sound' }).getByRole('img')).toBeVisible()

  await page.getByRole('link', { name: 'How It Works' }).click()
  await expect(page.locator('iframe[title="YouTube video player"]').contentFrame().locator('.ytp-cued-thumbnail-overlay-image')).toBeVisible()

  await page.getByRole('link', { name: 'Pricing' }).click()

  await expect(page.getByText('384.99')).toBeVisible()
  await expect(page.getByText('528.99')).toBeVisible()
})