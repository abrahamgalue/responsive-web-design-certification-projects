import { test } from '@playwright/test';

const URL = 'https://survey-form-abraham.netlify.app/';

test('should fill and submit the survey form successfully', async ({ page }) => {
  await page.goto(URL);

  const nameInput = page.getByPlaceholder('Enter your name');
  await nameInput.fill('Abraham');
  await nameInput.press('Tab');

  const emailInput = page.getByPlaceholder('Enter your email');
  await emailInput.fill('abrahamgalue512@gmail.com');

  const ageInput = page.getByPlaceholder('Enter your age');
  await ageInput.fill('20');

  await page.locator('#dropdown').selectOption('student');

  await page.getByLabel('You are learning?').check();

  await page.getByLabel('Technology').check();
  await page.getByText('Science').click();
  await page.getByText('Engineering').click();
  await page.getByText('Psychology').click();

  const commentsInput = page.getByPlaceholder('Write your comments and');
  await commentsInput.fill('Testing improves code confidence');

  await page.getByRole('button', { name: 'Submit' }).click();
});
