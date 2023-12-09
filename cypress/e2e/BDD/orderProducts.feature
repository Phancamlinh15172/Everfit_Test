Feature: Create Profile
    As an User
    I want to order products
    Scenario: The user can successfully order the selected product
        Given The user is logged into the system with the username "standard_user" and the password "secret_sauce"
        When The user selects "Sauce Labs Backpack" product and adds to cart
        And The user goes to the shopping cart and proceeds to checkout
        And The user fills in their information and clicks continue button
        And The user checks the checkout information for the "Sauce Labs Backpack" product and clicks the finish button
        Then The user will be navigated to "Checkout: Complete!" page
        And The user will receive a successful checkout notification with the content "Thank you for your order!"
