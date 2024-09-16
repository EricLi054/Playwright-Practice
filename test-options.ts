import { test as base } from "@playwright/test"

export type TestOptions = {
    // if there is another homePage in the project such as GlobalsQa.com URL
    globalsQaURL: string
}

export const test = base.extend<TestOptions>({
    globalsQaURL: ['', { option: true }]
})

