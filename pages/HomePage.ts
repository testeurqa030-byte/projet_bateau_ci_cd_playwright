import { Page } from "@playwright/test"
export class HomePage {
    readonly page: Page
    constructor(p: Page) {
        this.page = p
    }
    elements = {
        btnInscription: () => this.page.getByRole("paragraph").nth(0),
        btnLogin: () => this.page.getByRole('link', { name: "Se connecter" }).nth(0),
    }
    async CLickBtnInscription() {
        await this.elements.btnInscription().click()
    }

    async CLickBtnSeConnecter() {
        await this.elements.btnLogin().click()
    }

}