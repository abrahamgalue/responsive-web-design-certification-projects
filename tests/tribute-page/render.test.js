// @ts-check
import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('https://tribute-page-abraham.netlify.app/')

  await expect(page).toHaveTitle(/Tribute Page/)
})

test('has header', async ({ page }) => {
  await page.goto('https://tribute-page-abraham.netlify.app/')

  await expect(page.getByRole('heading', { name: 'Michael Jackson' })).toBeVisible()
})

test('has image', async ({ page }) => {
  await page.goto('https://tribute-page-abraham.netlify.app/')

  await expect(page.getByRole('img')).toHaveAttribute('src', 'media/michael-jackson.jpg')
})
