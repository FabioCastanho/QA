class HomePage {

    inputSearch = '[size="14"]';
    ButtonSearch = '[name="searchProducts"]';
    ClickButton = "friendly";

    fillSearch(productName){
        cy.get(this.inputSearch).clear().type(productName);
    }

    BotaoProcura(BotaoClicar){
        cy.get(this.ButtonSearch).click();
    }

    linkGato(){
        cy.contains(this.ClickButton).click();
    }
    

}

export default HomePage;