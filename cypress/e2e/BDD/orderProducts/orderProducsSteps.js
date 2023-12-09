import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../../support/PageObjects/loginPage";
import homePage from "../../../support/PageObjects/homePage";
import header from "../../../support/PageObjects/header";
import shoppingCart from "../../../support/PageObjects/shoppingCartPage";
import checkoutInformation from "../../../support/PageObjects/checkoutInformationPage";
import fakeData from "../commons/fakeData";
import checkoutOverview from "../../../support/PageObjects/checkoutOverviewPage";
import checkoutComplete from "../../../support/PageObjects/checkoutCompletePage";


Given(
  "The user is logged into the system with the username {string} and the password {string}",
  (userName, password) => {
    loginPage.loginIntoSystem(userName, password);
  }
);
When("The user selects {string} product and adds to cart", (productName) => {
  homePage.addItemToCartCalled(productName);
  header.shoppingCartBadge("1")
});
When("The user goes to the shopping cart and proceeds to checkout", () => {
    header.clickShopingCartIcon()
    shoppingCart.clickCheckoutButton()
  });
When("The user fills in their information and clicks continue button", () => {
    const data = fakeData();
    checkoutInformation.inputFirstName(data.firstName)
    checkoutInformation.inputLastName(data.lastName)
    checkoutInformation.inputZipCode(data.randomNumber)
    checkoutInformation.clickContinueButton()
  });
  When("The user checks the checkout information for the {string} product and clicks the finish button", (productName) => {
   checkoutOverview.checkoutInformation(productName)
   checkoutOverview.clickFinishButton()
  });
  Then("The user will be navigated to {string} page", (title) => {
    checkoutComplete.verifyNavigateProfileList(title)
  });
  Then("The user will receive a successful checkout notification with the content {string}", (message) => {
    checkoutComplete.successfulOrderMessage(message)
  });
  