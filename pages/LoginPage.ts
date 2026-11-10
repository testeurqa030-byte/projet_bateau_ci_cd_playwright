import { Page } from "@playwright/test"
export class LoginPage {
    readonly page: Page
    constructor(p: Page) {
        this.page = p
    }
    elements = {
        email: () => this.page.getByPlaceholder("votre@email.com"),
        password: () => this.page.getByPlaceholder("********"),
        btnConnecterCompte: () => this.page.getByRole("button", { name: "Se Connecter" }),
    }

    async SaisirEmail(n: string) {
        await this.elements.email().fill(n)
    }
    async SaisirPass(n: string) {
        await this.elements.password().fill(n)
    }

    async ClickConnecterCompte() {
        await this.elements.btnConnecterCompte().click()
    }
  
}