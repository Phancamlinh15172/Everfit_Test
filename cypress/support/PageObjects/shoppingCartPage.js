class shoppingCartPage {
    clickCheckoutButton(){
      cy.get("#checkout").click()
    }
  }
  export default new shoppingCartPage();
  