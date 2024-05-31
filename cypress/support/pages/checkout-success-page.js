class CheckoutSuccessPage {
    
    getContinueButton(){
        return cy.get('a[title="Continue"]');
    }

    clickContinueButton(){
        this.getContinueButton().click();
    }

}

export default new CheckoutSuccessPage()