import { Page } from "@playwright/test"
export class RegisterPage {
    readonly page: Page
    constructor(p: Page) {
        this.page = p
    }
    elements = {
        nomComplet: () => this.page.getByRole("textbox", { name: "Votre nom complet" }),
        email: () => this.page.getByPlaceholder("votre@email.com"),
        password: () => this.page.getByPlaceholder("********").nth(0),
        confPassword: () => this.page.getByPlaceholder("********").nth(1),
        btnCreerCompte: () => this.page.getByRole("button", { name: "Créer un compte" }),
        alertMessage: () => this.page.getByRole("alert"),
        souviensDeMoi: () => this.page.getByRole("checkbox", { name: "Souviens-toi de moi" })
    }
    async SaisirNomComplet(n: string) {
        await this.elements.nomComplet().fill(n)
    }
    async SaisirEmail(n: string) {
        await this.elements.email().fill(n)
    }
    async SaisirPass(n: string) {
        await this.elements.password().fill(n)
    }
    async SaisirConfPass(n: string) {
        await this.elements.confPassword().fill(n)
    }
    async ClickCreerCompte() {
        await this.elements.btnCreerCompte().click()
    }
    async ClickSouviensDeMoi() {
        await this.elements.souviensDeMoi().check()
    }
    GetAlert() {
        return this.elements.alertMessage()
    }

}