import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://product-landing-page-abraham.netlify.app/')

  await page.getByPlaceholder('Enter your email address').click()
  await page.getByPlaceholder('Enter your email address').fill('chanchito@gmail.com')
  await page.getByRole('button', { name: 'Get started' }).click()
});