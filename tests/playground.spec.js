const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });

test('To Do App', async({ page }) =>{
    await page.goto('/');
    await expect(page).toHaveTitle('')
    await page.getByRole('textbox',{placeholder: 'enter a new todo'}).fill('ny nytt')
    

})