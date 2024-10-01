class HomePage {
  inputSearch = '[size="14"]';
  ButtonSearch = '[name="searchProducts"]';
  ClickButton = "Friendly";
  AddtoCart = "Add";
  CheckOut = "Proceed";
  ButtonContinue = '[name="newOrder"]';
  ConfirmPurshase = "Confirm";


  fillSearch(productName) {
    cy.get(this.inputSearch).clear().type(productName);
  }

  BotaoProcura(BotaoClicar) {
    cy.get(this.ButtonSearch).click();
  }

  linkGato() {
    cy.contains(this.ClickButton).click();
  }

  AddToCart() {
    cy.contains(this.AddtoCart).click();
  }

  Checkout() {
    cy.contains(this.CheckOut).click();
  }

  ContinuarCheckout() {
    cy.get(this.ButtonContinue).click();
  }

  ConfirmarCompra() {
    cy.contains(this.ConfirmPurshase).click();
  }
}



export default HomePage;
