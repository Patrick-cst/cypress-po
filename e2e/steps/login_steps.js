/// <reference types="Cypress" />

import LoginPage from "../pages/login_page"; // Renomeie a classe para iniciar com letra maiúscula

const loginPage = new LoginPage; // Use a classe importada para criar uma nova instância


Given(/^que acessa o pagina home da aplicacao$/, () => {
	loginPage.acessarHomePage()
});

When(/^eu inserir meu usuario "([^"]*)" e "([^"]*)"$/, (email,senha) => {
	console.log(email,senha);
	loginPage.acessoLoginPage()
    loginPage.preencherDadosDeLogin(email,senha)
});

When(/^clicar no botao entrar$/, () => {
	loginPage.clicarBotaoLogin()
});

Then(/^validar mensagem "([^"]*)"$/, (mensagem) => {
	console.log(mensagem);
	
});

