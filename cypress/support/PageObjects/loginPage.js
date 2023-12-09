class Login {
  userNameInput = "#user-name";
  passwordInput = "#password";
  loginButton = "#login-button";
  enterUserName(userName) {
    cy.get(this.userNameInput).type(userName);
  }
  enterPassword(password) {
    cy.get(this.passwordInput).type(password);
  }
  clickLoginButton() {
    cy.get(this.loginButton).click();
  }
  verifyErrorMessage(message) {
    cy.get(".error-message-container.error").should("contain", message);
  }
  loginIntoSystem(userName, password) {
    cy.visit("");
    this.enterUserName(userName);
    this.enterPassword(password);
    this.clickLoginButton();
  }
}
export default new Login();
