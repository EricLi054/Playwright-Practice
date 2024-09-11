import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';

test.describe('Dashboard Page Tests', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigate();
  });
  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('dashboard page text', async () => {
    const isTitleVisible = await homePage.verifyTitle();
    expect(isTitleVisible).toBeTruthy();

    const isHeadingCorrect = await homePage.verifyHeading();
    expect(isHeadingCorrect).toBeTruthy();

    const isLightTextCorrect = await homePage.verifyLightCardText();
    expect(isLightTextCorrect).toBeTruthy();
  });
});
