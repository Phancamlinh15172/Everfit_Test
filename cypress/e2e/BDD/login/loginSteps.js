import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import login from "../../../support/PageObjects/loginPage";
import header from "../../../support/PageObjects/header";
Given("The user opens login page", () => {
  cy.visit("");
});
When("The user enters the username {string}", (userName) => {
  login.enterUserName(userName);
});
When("The user enters the password {string}", (password) => {
  login.enterPassword(password);
});
When("The user clicks on the login button", () => {
  login.clickLoginButton();
});
Then("The user will be navigated to Home page", () => {
  header.verifyNavigateToHomePage();
});
Then("The user will receive a error message with content {string}", (message) => {
  login.verifyErrorMessage(message);
});
When(
  "The user enters {string} into the Username field and {string} into the Password field",
  (userName, password) => {
    login.enterUserName(userName);
    login.enterPassword(password);
  }
);
