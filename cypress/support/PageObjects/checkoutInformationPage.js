class checkoutInformationPage {
  inputFirstName(firstname) {
    cy.get("#first-name").type(firstname);
  }
  inputLastName(lastname) {
    cy.get("#last-name").type(lastname);
  }
  inputZipCode(zipCode) {
    cy.get("#postal-code").type(zipCode);
  }
  clickContinueButton(){
    cy.get("#continue").click()
  }
  }
  export default new checkoutInformationPage();
  