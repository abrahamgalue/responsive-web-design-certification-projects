import { test, expect } from '@playwright/test'

const URL = 'https://personal-portfolio-abraham.netlify.app/#'

test('should navigate to different sections', async ({ page }) => {
  await page.goto(URL)

  await page.getByRole('link', { name: 'Projects' }).click()
  const projectsHeading = page.getByRole('heading', { name: 'Some Projects' })
  await expect(projectsHeading).toBeVisible()

  await page.getByRole('link', { name: 'Contact' }).click()
  const contactHeading = page.getByRole('heading', { name: 'Contact Me' })
  await expect(contactHeading).toBeVisible()

  await page.getByRole('link', { name: ' Back to Top' }).click()
  const mainHeading = page.getByRole('heading', { name: 'Hello, I am Abraham Galue.' })
  await expect(mainHeading).toBeVisible()
})
