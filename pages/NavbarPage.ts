import { Page } from "@playwright/test"
export class NavbarPage {
    readonly page: Page
    constructor(p: Page) {
        this.page = p
    }
    elements = {
        btnAjoutAnnonce: () => this.page.getByRole('button', { name: "Ajouter une annonce" }),
    }
    async CLickBtnAnnonce() {
        await this.elements.btnAjoutAnnonce().click()
    }


}