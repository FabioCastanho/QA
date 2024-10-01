class Login {

    usernameInput = '[id^="stripes-"]';
    userPassword = '[name="password"]';
    loginButton = '[name="signon"]';

    fillUser(user){
        cy.get(this.usernameInput).clear().type(user);
    }

    fillPassword(password){
        cy.get(this.userPassword).clear().type(password);
    }

    clickToLogin(){
        cy.get(this.loginButton).click();
    }

}

export default Login;