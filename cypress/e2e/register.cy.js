import Register from "../../POM/registerPage.js";
import { faker } from '@faker-js/faker';


describe('Register tests', () => {
  
  const register = new Register();

  it('Register new user', () => {
    // Visita a página de registro
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

    
  });
});
