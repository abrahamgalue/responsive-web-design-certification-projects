// @ts-check
import { test, expect } from '@playwright/test'

const URL = 'https://technical-documentation-abraham.netlify.app/'

test('has title', async ({ page }) => {
  await page.goto(URL)

  await expect(page).toHaveTitle(/Technical Documentation/)
})

test('has header', async ({ page }) => {
  await page.goto(URL)

  await expect(page.locator('#Introduccion').getByText('Introduccion')).toBeVisible()
})

test('has navigation links', async ({ page }) => {
  await page.goto(URL)

  await expect(page.getByText('Enlaces o Hipervinculos')).toBeVisible()
})