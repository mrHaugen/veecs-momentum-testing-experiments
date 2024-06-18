import { test, expect } from '@playwright/test';

const baseUrl= 'http://localhost:5173/'

test.describe('some random tests without gherkin', () => {

test('navigate to localhost', async ({ page }) => {
    await page.goto(baseUrl);
// Expect page to have Svelte logo element
    await expect(page.getByRole('img', {name: 'SvelteKit'})).toBeVisible();
});

test('redirect to Sverdle instruction', async({ page }) => {
    await page.goto(baseUrl);
    await page.getByTestId("sverdle").click()
    await expect(page).toHaveTitle('Sverdle')

    await page.getByRole('link', {name: 'i How to play'}).click()
    await page.waitForLoadState('networkidle');

    await expect(page).toHaveURL('http://localhost:5173/sverdle/how-to-play') 
    await expect(page).toHaveTitle('How to play Sverdle')
});

test('navigate to cucumber page and check nutrition facts', async({ page }) => {
    await page.goto('/cucumber')

   await expect(page.locator('#nutrition_table_cucumber')).toBeVisible()
   await expect(page.locator('#nutrition_table_cucumber')).toContainText('Energy')
 });

});
