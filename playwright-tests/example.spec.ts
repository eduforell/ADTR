import { test, expect } from '@playwright/test';

test('document has title', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await expect(page).toHaveTitle(
    'Senior front-end developer coding test - Econans'
  );
});

test('page has one h1', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await expect(page.locator('h1')).toHaveCount(1);
});

test('page has navigation bar', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await expect(page.locator('nav')).toBeGreaterThan(0);
});

test('page has search bar', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await expect(
    page.locator("input[placeholder='Search your movie here :)']")
  ).toBeGreaterThan(0);
});

test('movies list is initially displayed', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await expect(page.locator('.movie-card')).toBeGreaterThan(0);
});

test('switching to list view works', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.click("button:has-text('Switch to List View')");
  await expect(page.locator('.list-item')).toBeGreaterThan(0);
});
