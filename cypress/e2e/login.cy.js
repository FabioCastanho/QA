import Login from "../../POM/loginPage.js"
import { faker } from '@faker-js/faker';


describe('Login tests', () => {

  const login = new Login();


  it('Valid login', () => {
    //PRE TESTE

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

    cy.RegisterUser(dados);

    cy.visit('/actions/Account.action?signonForm=');
    login.fillUser(uniqueUserId);
    login.fillPassword(senha);
    login.clickToLogin();



  })
})