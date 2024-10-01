class Register {

    // Campos do formulário
    userIdInput = '[name="username"]';
    userPasswordInput = '[name="password"]';
    repeatedPasswordInput = '[name="repeatedPassword"]';
    firstNameInput = '[name="account.firstName"]';
    lastNameInput = '[name="account.lastName"]';
    emailInput = '[name="account.email"]';
    phoneInput = '[name="account.phone"]';
    address1Input = '[name="account.address1"]';
    address2Input = '[name="account.address2"]';
    cityInput = '[name="account.city"]';
    stateInput = '[name="account.state"]';
    zipInput = '[name="account.zip"]';
    countryInput = '[name="account.country"]';
    languageSelect = '[name="account.languagePreference"]';
    enableMyListCheck = '[name="account.listOption"]';
    saveAccountInformationButton = 'Save';

    // Métodos para preencher os campos
    preencherUserId(id) {
        cy.get(this.userIdInput).clear().type(id);
    }

    preencherPassword(password) {
        cy.get(this.userPasswordInput).clear().type(password);
    }

    preencherRepeatedPassword(repeatedPassword) {
        cy.get(this.repeatedPasswordInput).clear().type(repeatedPassword);
    }

    preencherFirstName(firstName) {
        cy.get(this.firstNameInput).clear().type(firstName);
    }

    preencherLastName(lastName) {
        cy.get(this.lastNameInput).clear().type(lastName);
    }

    preencherEmail(email) {
        cy.get(this.emailInput).clear().type(email);
    }

    preencherPhone(phone) {
        cy.get(this.phoneInput).clear().type(phone);
    }

    preencherAddress1(address1) {
        cy.get(this.address1Input).clear().type(address1);
    }

    preencherAddress2(address2) {
        cy.get(this.address2Input).clear().type(address2);
    }

    preencherCity(city) {
        cy.get(this.cityInput).clear().type(city);
    }

    preencherState(state) {
        cy.get(this.stateInput).clear().type(state);
    }

    preencherZip(zip) {
        cy.get(this.zipInput).clear().type(zip);
    }

    preencherCountry(country) {
        cy.get(this.countryInput).clear().type(country);
    }

    selecionarLinguagem(lingua) {
        cy.get(this.languageSelect).select(lingua);
    }

    clickToEnableMyList() {
        cy.get(this.enableMyListCheck).check();
    }

    clickToSaveAccountButton() {
        cy.contains(this.saveAccountInformationButton).click();
    }

    // Método para preencher todos os campos do formulário
    preencherFormulario(dados) {

        //cy.pause();
        this.preencherUserId(dados.userId);
        this.preencherPassword(dados.password);
        this.preencherRepeatedPassword(dados.repeatedPassword);
        this.preencherFirstName(dados.firstName);
        cy.log('PASSOU AQUI..............')
        this.preencherLastName(dados.lastName);
        this.preencherEmail(dados.email);
        this.preencherPhone(dados.phone);
        this.preencherAddress1(dados.address1);
        this.preencherAddress2(dados.address2);
        this.preencherCity(dados.city);
        this.preencherState(dados.state);
        this.preencherZip(dados.zip);
        this.preencherCountry(dados.country);
        this.selecionarLinguagem(dados.language);
        this.clickToEnableMyList();
    }
}

export default Register;
