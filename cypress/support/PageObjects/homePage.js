class HomePage {
  addItemToCartCalled(productName) {
    cy.contains(".inventory_item", productName).contains("Add to cart").click();
  }
  
}
export default new HomePage();
