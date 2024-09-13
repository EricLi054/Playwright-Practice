// ModalOverlaysPageTest.spec.ts
import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { DialogSubPage } from './pages/DialogPage';

test.describe('Modal & Overlays - Dialog Tests', () => {
  let homePage: HomePage;
  let dialogSubPage: DialogSubPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    dialogSubPage = new DialogSubPage(page);

    await homePage.navigate();
    await homePage.navigateToDialogPage();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('should open dialog without esc close and dismiss it', async () => {
    await dialogSubPage.openDialog();

    const dialogTitle = dialogSubPage.getDialogTitle();
    await expect(dialogTitle).toBeVisible();
    await expect(dialogTitle).toHaveText('This is a title passed to the dialog component');

    await dialogSubPage.dismissDialog();
    await expect(dialogTitle).not.toBeVisible();

    
  });
});
