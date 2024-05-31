import { Before, Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import commonPage from "../../support/pages/common-page";

Given('I access to the Automation Test Store as guest', () => {
    cy.clearAllCookies();
    cy.visit('/');
})
 
When(`I select {string} option from the products navigation bar`, (option) => {
    commonPage.clickProductNavBar(option);
    cy.isVisible('span.maintext', option);
}) 

When(`I select {string} option from the main navigation bar`, (option) => {
    commonPage.clickMainNav(option);
}) 

