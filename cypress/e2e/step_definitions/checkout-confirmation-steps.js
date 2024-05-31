import { Before, Given, When, And, Then } from  "@badeball/cypress-cucumber-preprocessor";
import checkoutConfirmationPage from "../../support/pages/checkout-confirmation-page";

Then('I proceed with the checkout confirmation', () => {
    cy.isVisible('h1', 'Checkout Confirmation');
    checkoutConfirmationPage.clickConfirmationOrderButton();
});