export class ProductDetailsPage {
    
    getAddToCartButton(){
        return cy.get('a.cart').contains('Add to Cart');
    }

    clickAddToCartButton(){
        this.getAddToCartButton().click();
    }
}    
export default new ProductDetailsPage()