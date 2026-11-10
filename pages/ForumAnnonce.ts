import { Page } from "@playwright/test"
import { LoginPage } from "./LoginPage"
export class ForumAnnonce extends LoginPage {
    constructor(p: Page) {
        super(p)
    }
    elements2 = {
        //locator 1 er cercle
        InputImage: () => this.page.locator("#photo-input-0"),
        //locator 2 er cercle
        InputTitle: () => this.page.locator("#titre"),
        InputDescription: () => this.page.locator("#description"),
        InputChipEmbarcation: () => this.page.locator("id^='chip-type-embarcation'"),
        InputCategorie: () => this.page.locator("id^='chip-categorie'"),
        InputNbrPlace: () => this.page.locator("#nombre_places"),
        InputAnneeConst: () => this.page.locator("#annee_construction"),
        //locator 3 er cercle
        InputLangeur: () => this.page.locator("#longueur"),
        InputLargeur: () => this.page.locator("#largeur"),
        InputCarburant: () => this.page.locator("id^='chip-carburant'"),
        InputConsomation: () => this.page.locator("#consommation"),
        Inputmotorisation: () => this.page.locator("#motorisation"),
        InputPermis: () => this.page.locator("id^='toggle-permis-requis'"),
        InputChipCreaneau: () => this.page.locator("id^='chip-creneau'"),
        //locator 4 er cercle
        InputEquip: () => this.page.locator("id^='chip-equipement'"),
        //locator 5 er cercle
        Inputprix_jour: () => this.page.locator("#prix_jour"),
        Inputprix_demi_jour: () => this.page.locator("#prix_demi_jour"),
        Inputprix_heure: () => this.page.locator("#prix_heure"),
        Inputcaution: () => this.page.locator("#caution"),
        //locator 6 er cercle
        InputAdresse: () => this.page.locator("#adresse"),
        Inputchip_ville: () => this.page.locator("id^='chip-ville'"),
        InputConditions: () => this.page.locator("#conditions"),
        //locator 7 er cercle
        InputNomPro: () => this.page.locator("#nom_proprietaire"),
        Inputtelephone: () => this.page.locator("#telephone"),
        Inputemail_contact: () => this.page.locator("#email_contact"),
        //btn steps
        btnSuivant: () => this.page.locator("#btn-next-step"),
        btnbtn_prev_step: () => this.page.locator("#btn-prev-step"),
    }
    async Steps1() {
        await this.elements2.InputImage().setInputFiles("assets\\img.png")
        await this.elements2.btnSuivant().click()
    }
    async Steps2(t: string, d: string, nbr: string, a: string) {
        await this.elements2.InputTitle().fill(t);
        await this.elements2.InputDescription().fill(d);
        await this.elements2.InputNbrPlace().fill(nbr);
        await this.elements2.InputAnneeConst().fill(a);
        await this.ChoiceInputChipEmbarcation()
        await this.ChoiceInputCategorie()
        await this.elements2.btnSuivant().click()
    }
    async Steps3(t: string, d: string, nbr: string) {
        await this.elements2.InputLangeur().fill(t);
        await this.elements2.InputLargeur().fill(d);
        await this.elements2.Inputmotorisation().fill(nbr);
        await this.choiceInputChipCreaneau()
        await this.choiceCarburant()
        await this.elements2.btnSuivant().click()
    }



    //les actio,s
    async ChoiceInputChipEmbarcation() {
        const size = await this.elements2.InputChipEmbarcation().count()
        const r = Math.floor(Math.random() * size)
        await this.elements2.InputChipEmbarcation().nth(r).click()
    }
    async ChoiceInputEquip() {
        const size = await this.elements2.InputChipEmbarcation().count()
        const r = Math.floor(Math.random() * size)
        for (let i = 0; i < size - 3; i++) {
            let b = Math.floor(Math.random() * size)
            await this.elements2.InputEquip().nth(b).click()

        }
    }
    async ChoiceInputCategorie() {
        const size = await this.elements2.InputCategorie().count()
        const r = Math.floor(Math.random() * size)
        await this.elements2.InputCategorie().nth(r).click()
    }
    async choiceCarburant() {
        const size = await this.elements2.InputCarburant().count()
        const r = Math.floor(Math.random() * size)
        await this.elements2.InputCarburant().nth(r).click()
    }
    async choiceInputChipCreaneau() {
        const size = await this.elements2.InputChipCreaneau().count()
        const r = Math.floor(Math.random() * size)
        await this.elements2.InputChipCreaneau().nth(r).click()
    }


}