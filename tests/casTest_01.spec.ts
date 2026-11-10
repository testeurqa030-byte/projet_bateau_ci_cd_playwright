import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';

let hp: HomePage
let rp: RegisterPage
test('Inscription valide', async ({ page }) => {
  hp = new HomePage(page);
  rp = new RegisterPage(page);
  //visiter le lien
  await page.goto('https://app.thrundrz.com/');
  //cliquer sur button s'inscrir  
  await hp.CLickBtnInscription()
  //verifier url /newCompte
  await expect(page).toHaveURL(/\/newcompte$/)
  //saisir nom complet
  await rp.SaisirNomComplet("Hocine")
  //saisir email 
  const random = Math.floor(Math.random() * 1304094)
  //hocine292049@gmail.com
  await rp.SaisirEmail("Hocine" + random + "@gmail.com")
  //saisir password
  await rp.SaisirPass("Hocine1234")
  //saisir confirmation  password
  await rp.SaisirConfPass("Hocine1234")
  //cliquer sur souviens de  moi
  await rp.ClickSouviensDeMoi()
  //cliquer le button creer le compte
  await rp.ClickCreerCompte()
  //verfier l'alert
  await expect(rp.GetAlert()).toBeVisible()
  //verifier l'url Explorer
  await expect(page).toHaveURL(/\/EspaceClient\/explorer$/)
});

