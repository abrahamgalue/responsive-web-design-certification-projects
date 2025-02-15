import { test, expect } from '@playwright/test'

const URL = 'https://personal-portfolio-abraham.netlify.app/'

test('should have the correct title', async ({ page }) => {
  await page.goto(URL)
  await expect(page).toHaveTitle(/Portfolio/)
})

test('should have a header with profile photo and navigation links', async ({ page }) => {
  await page.goto(URL)

  const profilePhotoLink = page.getByRole('link', { name: 'Profile photo Abraham Galué' })
  await expect(profilePhotoLink).toBeVisible()

  const navigationLinks = ['About', 'Projects', 'Contact']
  for (const linkText of navigationLinks) {
    const link = page.getByRole('link', { name: linkText })
    await expect(link).toBeVisible()
  }
})

test('should have a main section with introduction', async ({ page }) => {
  await page.goto(URL)

  const mainHeading = page.getByRole('heading', { name: 'Hello, I am Abraham Galue.' })
  await expect(mainHeading).toBeVisible()

  const introductionText = page.getByText('a web developer lover')
  await expect(introductionText).toBeVisible()

  const combinedText = page.getByText('Hello, I am Abraham Galue. a')
  await expect(combinedText).toBeVisible()
})
