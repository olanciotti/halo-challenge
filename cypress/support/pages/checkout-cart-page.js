import {removeCurrencyAndCleanPrice} from "../../support/utils/utils";

export class CheckoutCartPage {
    
    setQuantityInput(productQuantity){
        cy.get(`input[id^="cart_quantity"]`).clear().type(productQuantity);    
    }
    
    getCartUpdateButton(){
        return cy.get('#cart_update').contains('Update');
    }

    clickCartUpdateButton(){
        this.getCartUpdateButton().click();
    }

    setCountry(countryCode, country){
        cy.get('select#estimate_country').select(countryCode, country);
    }

    setState(state){
        cy.get('select#estimate_country_zones').select(state);
    }

    getCheckoutCartButton(){
        return cy.get('#cart_checkout2').contains('Checkout');
    }

    clickCheckoutCart(){
        this.getCheckoutCartButton().click();
    }

    saveInitialTotalValue(){
        cy.get('.table-bordered').find('td').eq(5).invoke('text').then((value)=>{
            const NUMERIC_VALUE = removeCurrencyAndCleanPrice(value);
            cy.wrap(parseInt(NUMERIC_VALUE)).as('initialTotalValue');
        })
    }

    checkTotalValueHasIncreased(){
        cy.get('@initialTotalValue').then((initialTotalValue)=>{
            cy.get('.table-bordered').find('td').eq(5).invoke('text').then((value)=>{
                const NUMERIC_VALUE_UPDATED = removeCurrencyAndCleanPrice(value);
                expect(parseInt(NUMERIC_VALUE_UPDATED)).to.be.greaterThan(initialTotalValue);
            })
        })
    }
}    
export default new CheckoutCartPage()