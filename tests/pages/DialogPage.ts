import { Page } from '@playwright/test';

export class DialogSubPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getOpenWithoutEscCloseSection() {
        return this.page.locator('nb-card', { hasText: 'Open Without Esc Close' });
    }

    getOpenDialogButton() {
        return this.getOpenWithoutEscCloseSection().getByRole('button', { name: 'Open Dialog with esc close' });
    }

    getDialogTitle() {
        return this.page.getByText('This is a title passed to the dialog component');
    }

    getDismissDialogButton() {
        return this.page.getByRole('button', { name: 'Dismiss Dialog' });
    }

    async openDialog() {
        await this.getOpenDialogButton().click();
    }

    async dismissDialog() {
        await this.getDismissDialogButton().click();
    }

}
