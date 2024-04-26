/// <reference types="Cypress" />

import LoginElements from "../elements/login_elements";
import HomeElements from "../elements/home_elements"; // Mantenha apenas uma linha de importação

const loginElements = new LoginElements; // Renomeie a variável para evitar conflito de nomes
const homeElements = new HomeElements; // Mantenha apenas uma variável de instância


const url = Cypress.config('baseUrl')

class LoginPage {
    acessarHomePage(){
        cy.visit(url)
        cy.viewport(1920, 1080)
        cy.wait(3000)
        cy.get(homeElements.btnHideCookie(), { timeout: 3000 }).click();
    }

    acessoLoginPage(){
        cy.contains(homeElements.btnSelectAccount()).click()
        cy.contains(homeElements.btnLogin()).click()
    }

    preencherDadosDeLogin(email, password){
        cy.get(loginElements.inputEmail()).type(email)
        cy.get(loginElements.inputPassword()).type(password)
    }

    clicarBotaoLogin(){
        cy.get(loginElements.btnEntrar()).click()
    }
} export default LoginPage