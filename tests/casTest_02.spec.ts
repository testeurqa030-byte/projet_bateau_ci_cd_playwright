import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { ForumAnnonce } from '../pages/ForumAnnonce';
import { NavbarPage } from '../pages/NavbarPage';

let hp: HomePage
let fa: ForumAnnonce
let nv: NavbarPage
test('Inscription valide', async ({ page }) => {
  hp = new HomePage(page);
  fa = new ForumAnnonce(page);
  nv = new NavbarPage(page);
  //visiter le lien
  await page.goto('https://app.thrundrz.com/');
  //cliquer sur button s'inscrir  
  await hp.CLickBtnSeConnecter()
  //verifier url /login
  await expect(page).toHaveURL(/\/login$/)
  await fa.SaisirEmail("hani2020@gmail.com")
  await fa.SaisirPass("hani2020")
  await fa.ClickConnecterCompte();
  //verifier l'url Explorer
  await expect(page).toHaveURL(/\/EspaceClient\/explorer$/)
  await nv.CLickBtnAnnonce()
  await expect(page).toHaveURL(/\/EspaceClient\/annonces\/new$/)

  //await page.waitForTimeout(3000)
  await fa.Steps1()
  await fa.Steps2("t", "d", "2", "2026")
  await fa.Steps3("2", "2", "2")

});

