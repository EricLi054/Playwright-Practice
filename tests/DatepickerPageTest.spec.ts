import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { DatepickerPage } from './pages/DatepickerPage';

test.describe('Datepicker Page Tests', () => {
  let homePage: HomePage;
  let datepickerPage: DatepickerPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    datepickerPage = new DatepickerPage(page);
    await homePage.navigate();
    await homePage.navigateToDatepickerPage();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('should open datepicker and select a specific date', async () => {
    await datepickerPage.openDatepicker();

    const selectedDay = '15';
    await datepickerPage.selectDate(selectedDay);

    const selectedDateInput = datepickerPage.getSelectedDateInput();

    const today = new Date();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const currentMonthName = monthNames[today.getMonth()];
    const currentYear = today.getFullYear();

    const expectedDate = `${currentMonthName} ${selectedDay}, ${currentYear}`;
    await expect(selectedDateInput).toHaveValue(expectedDate);
  });
});
