import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('I open url {string}', async ({ page }, url) => {
  await page.goto(url);
});

When('I click link {string}', async ({ page }, name) => {
  await page.getByRole('link', { name }).click();
});

Then('I see in title {string}', async ({ page }, keyword) => {
  await expect(page).toHaveTitle(new RegExp(keyword));
});


// HTML Forms
When('I click on link {string}', async ({}, arg) => {
  // ...
});


Then('I see in heading {string}', async ({}, arg) => {
  // ...
});


When('I click label {string}', async ({}, arg) => {
    // ...
  });
  

  Then('I see in counter-viewport increased by one', async ({}) => {
    // ...
  });
  