class checkoutCompletePage {
  verifyNavigateProfileList(title) {
    cy.get(".title").should("contain", title);
  }
  successfulOrderMessage(message){
    cy.get(".complete-header").should("contain", message);
  }
}
export default new checkoutCompletePage();
