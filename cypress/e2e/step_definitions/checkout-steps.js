import { Before, Given, When, And, Then } from  "@badeball/cypress-cucumber-preprocessor";
import { getPersonalData } from "../../support/utils/data-generator";
import checkoutPage from "../../support/pages/checkout-page";
import commonPage from "../../support/pages/common-page";

Then('I fill Your Personal details form section', () => {
    const GENERATE_GUEST_PERSONAL_DATA = getPersonalData(); 

    cy.isVisible('h4', 'Your Personal Details');
    checkoutPage.completeGuestPersonalDetailsForm(GENERATE_GUEST_PERSONAL_DATA);
});

Then('I fill Your Address form section with the following values and click Continue button', (table) => {
    cy.get('h4').should('contain', 'Your Address').and('be.visible');
    table.hashes().forEach(row => {
        checkoutPage.setGuestAddress(row.address);
        checkoutPage.setGuestCountry(row.country);
        checkoutPage.setGuestCity(row.city);
        checkoutPage.setGuestState(row.region);
        checkoutPage.setGuestZipCode(row.zipcode);
        commonPage.clickContinueButton();
    })
})
