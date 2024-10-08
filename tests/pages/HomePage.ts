import { Page } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly url: string;
    readonly headingText: string;
    readonly title: string;

    constructor(page: Page) {
        this.page = page;
        this.url = '/';
        this.headingText = 'PW-test';
        this.title = 'IoT Dashboard';
    }

    async navigate() {
        await this.page.goto(this.url);
    }

    getTitle() {
        return this.page.locator('[title="IoT Dashboard"]');
    }

    getHeading() {
        return this.page.locator('.logo');
    }

    getLightCard() {
        return this.page.locator('ngx-status-card[ng-reflect-title="Light"] .title.h5');
    }

    async verifyTitle() {
        const titleElement = this.getTitle();
        return await titleElement.isVisible();
    }

    async verifyHeading() {
        const headingText = await this.getHeading().innerText();
        return headingText === this.headingText;
    }

    async verifyLightCardText() {
        const lightCardText = await this.getLightCard().innerText();
        return lightCardText.includes('Light');
    }

    async clickFormsSidebarButton() {
        await this.page.locator('[title="Forms"]').click();
        await this.page.locator('text=Form Layouts').click();
    }

    async navigateToDatepickerPage() {
        await this.page.locator('[title="Forms"]').click();
        await this.page.getByText('Datepicker').click();
    }

    async navigateToDialogPage() {
        await this.page.getByText('Modal & Overlays').click();
        await this.page.getByText('Dialog').click();
    }

    async navigateToWindowPage() {
        await this.page.getByText('Modal & Overlays').click();
        await this.page.getByText('Window').click();
    }

    async navigateToPopoverPage() {
        await this.page.getByText('Modal & Overlays').click();
        await this.page.getByText('Popover').click();
    }

    async navigateToToastrPage() {
        await this.page.getByText('Modal & Overlays').click();
        await this.page.getByText('Toastr').click();
    }

    async navigateToTooltipPage() {
        await this.page.getByText('Modal & Overlays').click();
        await this.page.getByText('Tooltip').click();
    }
}