// @ts-check
import { test, expect } from '@playwright/test'

const URL = 'https://technical-documentation-abraham.netlify.app/'

test('has title', async ({ page }) => {
  await page.goto(URL)

  await expect(page).toHaveTitle(/Technical Documentation/)
})

test('has header', async ({ page }) => {
  await page.goto(URL)

  await expect(page.locator('header').filter({ hasText: 'Introduccion' })).toBeVisible()
})

test('has navigation links', async ({ page }) => {
  await page.goto(URL)

  await expect(page.locator('header').filter({ hasText: 'Enlaces o Hipervinculos' })).toBeVisible()
})