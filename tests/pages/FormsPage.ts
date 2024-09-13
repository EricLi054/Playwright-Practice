import { Page } from '@playwright/test';

export class FormsPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getEmailField() {
        return this.page.locator('#inputEmail1');
    }

    getPasswordField() {
        return this.page.locator('#inputPassword2');
    }

    getOption1Radio() {
        return this.page.getByText('Option 1');
    }

    getDisabledOptionRadio() {
        return this.page.getByText('Disabled Option');
    }

    async inputEmail(email: string) {
        await this.getEmailField().fill(email);
    }

    async inputPassword(password: string) {
        await this.getPasswordField().fill(password);
    }

    async selectOption1Radio() {
        await this.getOption1Radio().check();
    }

    async verifyDisabledOptionRadioSelected() {
        const isChecked = await this.getDisabledOptionRadio().isChecked();
        const isDisabled = await this.getDisabledOptionRadio().isDisabled();
        return !isChecked && isDisabled;
    }
}
