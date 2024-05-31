import { Before, Given, When, And, Then } from  "@badeball/cypress-cucumber-preprocessor";
import gridProductsPage from "../../support/pages/grid-products-page";
import productDetailsPage from "../../support/pages/product-details-page";

When(`I add a product that contains {string} to the cart`, (productName) => {
    gridProductsPage.addProductContainsWordInName(productName);
    cy.get('h1 > span').should('contain',productName).and('be.visible');
    productDetailsPage.clickAddToCartButton();
})