class checkoutInformationPage {
    checkoutInformation(productName){
        cy.get(".inventory_item_name").should("contain",productName)
    }
    clickFinishButton(){
      cy.get("#finish").click()
    }
    }
    export default new checkoutInformationPage();