import { Page } from '@playwright/test';

export class DatepickerPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getFormPicker() {
        return this.page.getByPlaceholder('Form Picker');
    }

    getDatepickerHeader() {
        return this.page.locator('.datepicker-header');
    }

    getSpecificDate(day: string) {
        return this.page.getByText(day);
    }

    async openDatepicker() {
        await this.getFormPicker().click();
    }

    async selectDate(day: string) {
        await this.getSpecificDate(day).click();
    }

    getSelectedDateInput() {
        return this.page.getByPlaceholder('Form Picker');
    }
}
