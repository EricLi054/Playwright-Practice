import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { FormsPage } from './pages/FormsPage';

test.describe('Forms Page Tests', () => {
  let homePage: HomePage;
  let formsPage: FormsPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    formsPage = new FormsPage(page);
    await homePage.navigate();
    await homePage.clickFormsSidebarButton();
  });
  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('interact with Forms Page elements', async () => {
    await formsPage.inputEmail('example@hot.com');
    await formsPage.inputPassword('Pwd123@#');
    await formsPage.selectOption1Radio();

    const isDisabledOptionSelected = await formsPage.verifyDisabledOptionRadioSelected();
    expect(isDisabledOptionSelected).toBe(true);
  });
});
