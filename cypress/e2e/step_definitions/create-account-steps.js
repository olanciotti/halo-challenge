import { Before, Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import { getPersonalData } from "../../support/utils/data-generator";
import createAccountPage from "../../support/pages/create-account-page";
import commonPage from "../../support/pages/common-page";
import checkoutSuccessPage from "../../support/pages/checkout-success-page";

Then('I fill Your Personal details form section for new users', () => {
    const GENERATE_PERSONAL_DATA = getPersonalData(); 
    cy.task('setUserData', GENERATE_PERSONAL_DATA);

    cy.isVisible('h4', 'Your Personal Details');    
    createAccountPage.completePersonalDetailsForm(GENERATE_PERSONAL_DATA);
});

Then('I fill Your Address form section for new users with the following values and click Continue button', (table) => {
    cy.isVisible('h4', 'Your Address').and('be.visible');
    table.hashes().forEach(row => {
        createAccountPage.setUserAddress(row.address);
        createAccountPage.setUserCountry(row.country);
        createAccountPage.setUserCity(row.city);
        createAccountPage.setUserZone(row.region);
        createAccountPage.setUserZipCode(row.zipcode);
    })
})

Then('I fill the login details section with valid data', (table) => {
    const UNIQUE_LOGIN_NAME = `testing_name_${Cypress._.random(1, 200000)}`;
    cy.task('setUserEmail', UNIQUE_LOGIN_NAME);
    
    cy.isVisible('h4', 'Login Details');
    createAccountPage.setUserLoginName(UNIQUE_LOGIN_NAME);
    table.hashes().forEach(row => {
        createAccountPage.setUserPassword(row.password);
        createAccountPage.setUserConfirmPassword(row.passwordconfirm);
    })
})

Then('I select the option {string} in order to suscribe to the Newsletter', (option) => {
    cy.isVisible('h4', 'Newsletter');
    cy.isVisible('label', 'Subscribe:');
    createAccountPage.suscribeToNewsletter(option);
})

Then('I accept the terms and policies, and click Continue', () => {
    cy.isVisible('label', 'I have read and agree to the Privacy Policy');
    createAccountPage.acceptTermsAndPolicy();
    commonPage.clickContinueButton();
})

Then('I see the page that the account has been created successfully', () => {
    cy.isVisible('h1', ' Your Account Has Been Created!');
    cy.isVisible('p', 'Congratulations! Your new account has been successfully created!');
    cy.isVisible('p', 'You can now take advantage of member privileges to enhance your online shopping experience with us.');
    checkoutSuccessPage.clickContinueButton();
})