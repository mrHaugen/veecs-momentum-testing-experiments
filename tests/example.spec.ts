// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('localhost testing', async ({ page }) => {
  await page.goto('http://localhost:5173/test');


  await page.getByTestId("forNavn").clear()
  await page.getByLabel('First name:').clear()

});

test('localhost navigering', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.getByTestId("sverdle").click()
  await page.getByTestId('rad').isVisible()
  await page.getByTestId('rad0celle0').isEnabled()
  await page.getByTestId('rad0celle1').isDisabled()
  await page.getByTestId('rad2').isEnabled()

});