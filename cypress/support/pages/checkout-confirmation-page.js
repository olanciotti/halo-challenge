class CheckoutConfirmationPage {
    
    getConfirmationOrderButton(){
        return cy.get('#checkout_btn').contains('Confirm Order');
    }

    clickConfirmationOrderButton(){
        this.getConfirmationOrderButton().click();
    }

}

export default new CheckoutConfirmationPage()