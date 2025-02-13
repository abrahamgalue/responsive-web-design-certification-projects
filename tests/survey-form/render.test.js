import { test, expect } from '@playwright/test'

const URL = 'https://survey-form-abraham.netlify.app/'

test('has title', async ({ page }) => {
  await page.goto(URL)

  await expect(page).toHaveTitle(/Survey Form/)
})

test('has header', async ({ page }) => {
  await page.goto(URL)

  await expect(page.getByRole('heading', { name: 'Survey Form' })).toBeVisible()

  await expect(page.getByText('Thank you for participating')).toBeVisible()
})

test('has labels', async ({ page }) => {
  await page.goto(URL)

  await expect(page.getByText('Name')).toBeVisible()
  await expect(page.getByText('Email')).toBeVisible()
  await expect(page.getByText('Enter Age (optional)')).toBeVisible()
  await expect(page.getByText('Enter your profession')).toBeVisible()
  await expect(page.getByText('What do you think about our')).toBeVisible()
  await expect(page.getByText('What are the categories that')).toBeVisible()
  await expect(page.getByText('Comments and suggestions')).toBeVisible()
})