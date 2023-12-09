class header {
    verifyNavigateToHomePage() {
      cy.get(".app_logo").should("contain", "Swag Labs");
    }
    shoppingCartBadge(number) {
        cy.get(".shopping_cart_badge").should("contain.text", number);
      }
    clickShopingCartIcon(){
      cy.get(".shopping_cart_link").click()
    }
  }
  export default new header();
  