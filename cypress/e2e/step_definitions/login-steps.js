import { Before, Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../support/pages/login-page";
import commonPage from "../../support/pages/common-page";

Given('I choose to Register Account option', () => {
    cy.isVisible('h2', 'I am a new customer.');
    cy.isVisible('h4', 'Checkout Options:');
    cy.isVisible('div', `By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.`);
    cy.isVisible('label[for="accountFrm_accountregister"]', 'Register Account');
    loginPage.checkRegisterAccount();
    commonPage.clickContinueButton();
    cy.isVisible('h1', 'Create Account');
})

Then('I am able to log in with my new credentials', () => {
    cy.isVisible('h1', 'Account Login');
    cy.task('getUserEmail').then((userEmail) => {
        loginPage.setName(userEmail);
    })
    loginPage.setPassword('password1');
    loginPage.clickLoginButton();
    cy.isVisible('h1', 'My Account');
    cy.task('getUserData').then((userData)=>{
        cy.isVisible('.menu_text', `Welcome back ${userData.firstName}`)
        cy.isVisible('h1', userData.firstName);
    })
})
