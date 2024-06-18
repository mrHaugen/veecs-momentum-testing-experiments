import { test, expect } from '@playwright/test';

const baseUrl= 'http://localhost:5173/'

test.describe('Svelte counter tests', ()=> {

test('verify if the welcome banner is available', async ({page}) => {
    await page.goto(baseUrl);
    await expect(page.getByRole('heading', {name: 'welcome'})).toBeVisible()

});

test('click on plus/minus buttons', async ({page}) => {
    await page.goto(baseUrl);

// check counter before click
const counter = page.locator('.counter-viewport.s-HTE2L0KcXC-T strong.s-HTE2L0KcXC-T');
await expect(counter.nth(1)).toHaveText('0');

//check counter after click on +
await page.getByRole('button',{name: 'Increase the counter by one'}).click()
await expect(counter.nth(1)).toHaveText('1');

//check counter after click on +
await page.getByRole('button',{name: 'Decrease the counter by one'}).click()
await expect(counter.nth(1)).toHaveText('0');
});
}); 