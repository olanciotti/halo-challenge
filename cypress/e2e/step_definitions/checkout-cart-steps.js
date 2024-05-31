import { Before, Given, When, And, Then } from  "@badeball/cypress-cucumber-preprocessor";
import checkoutCartPage from "../../support/pages/checkout-cart-page";
import loginPage from "../../support/pages/login-page";
import commonPage from "../../support/pages/common-page";

When(`I increase the first product quantity to {string}`, function (productQuantity) {
    checkoutCartPage.saveInitialTotalValue();
    
    checkoutCartPage.setQuantityInput(productQuantity);
    cy.get(`input[id^="cart_quantity"]`).should('have.value', productQuantity);
    checkoutCartPage.clickCartUpdateButton();

    checkoutCartPage.checkTotalValueHasIncreased();
});
    
Then('I complete Estimate Shipping & Taxes section', (table)=> {
    table.hashes().forEach(row => {
        checkoutCartPage.setCountry(row.countrycode, row.country);
        checkoutCartPage.setState(row.state);
    })
})

Then('I proceed with the checkout as guest', () => {
    checkoutCartPage.clickCheckoutCart();
    cy.isVisible('h1', 'Account Login');
    loginPage.checkGuestCheckout();
    commonPage.clickContinueButton();
    cy.isVisible('h1', 'Guest Checkout - Step 1');
})

Then('I proceed with the checkout logged in', () => {
    cy.get('#cart_checkout2').contains('Checkout').click();
})
