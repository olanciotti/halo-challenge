import { Before, Given, When, And, Then } from  "@badeball/cypress-cucumber-preprocessor";
import checkoutSuccessPage from "../../support/pages/checkout-success-page";

Then('I see the order confirmation page as guest user', () => {
    cy.url().should('contain', 'checkout/success');
    cy.isVisible('h1', 'Your Order Has Been Processed!');
    cy.get('.breadcrumb').should('contain', 'Success').should('be.visible');
    cy.isVisible('p', 'Your order has been successfully processed!');
    cy.isVisible('p', 'You can view your order details by going to the invoice page');
    cy.isVisible('p', 'Please direct any questions you have to the store owner');
    cy.isVisible('p', 'Thank you for shopping with us!');
    checkoutSuccessPage.clickContinueButton();
});

Then('I see the order confirmation page as logged in user', () => {
    cy.url().should('contain', 'checkout/success');
    cy.isVisible('h1', 'Your Order Has Been Processed!');
    cy.isVisible('.breadcrumb', 'Success');
    cy.isVisible('p', 'You can view your order details by going to the invoice page');
    cy.isVisible('p', 'Please direct any questions you have to the store owner');
    cy.isVisible('p', 'Thank you for shopping with us!');
    checkoutSuccessPage.clickContinueButton();
});