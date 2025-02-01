// @ts-check
import { test, expect } from '@playwright/test'

const URL = 'https://product-landing-page-abraham.netlify.app/'

test('has title', async ({ page }) => {
  await page.goto(URL)

  await expect(page).toHaveTitle(/Product Landing Page/)
})

test('has header', async ({ page }) => {
  await page.goto(URL)

  await expect(page.locator('#header')).toBeVisible()
  await expect(page.getByRole('link', { name: 'header logo shure' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Features' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Images' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'How It Works' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Pricing' })).toBeVisible()
})

test('has logo', async ({ page }) => {
  await page.goto(URL)

  await expect(page.getByRole('link', { name: 'header logo shure' })).toBeVisible()
})

test('has navigation links', async ({ page }) => {
  await page.goto(URL)

  await expect(page.getByRole('link', { name: 'Features' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Images' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'How It Works' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Pricing' })).toBeVisible()
})