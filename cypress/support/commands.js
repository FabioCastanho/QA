// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import Register from "../../POM/registerPage.js";
import Login from "../../POM/loginPage.js";
import { faker } from '@faker-js/faker';


Cypress.Commands.add('RegisterUser', (dados) => {
   
    const register = new Register();
    // Visita a página de registro
    cy.visit('/actions/Account.action?newAccountForm=');

    // Preenche o formulário com os dados do usuário
    register.preencherFormulario(dados);

    // Clica no botão de salvar/criar conta
    register.clickToSaveAccountButton();


})

Cypress.Commands.add('RegisterAndLogin', () => {
    const register = new Register();
    const login = new Login();

    const uniqueUserId = 'usuarioTeste' + Math.floor(Math.random() * 10000);
    const senha = faker.internet.password();
    
    const dados = {
        userId: uniqueUserId,
        password: senha,
        repeatedPassword: senha,
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email({ firstName: 'Bruno', lastName: 'Figueiredo', provider: 'mestre-qa.com' }),
        phone: '11999999999',
        address1: 'Rua Principal, 123',
        address2: 'Apt 456',
        city: 'São Paulo',
        state: 'SP',
        zip: '01000-000',
        country: 'Brasil',
        language: 'japanese', // Escolha o idioma disponível na seleção
        enableMyList: true // Marque o checkbox, se necessário
      }
    
    
    // Visita a página de registro
    cy.visit('/actions/Account.action?newAccountForm=');

    // Preenche o formulário com os dados do usuário
    register.preencherFormulario(dados);

    // Clica no botão de salvar/criar conta
    register.clickToSaveAccountButton();

    cy.visit('/actions/Account.action?signonForm=');
    login.fillUser(uniqueUserId);
    login.fillPassword(senha);
    login.clickToLogin();


})






