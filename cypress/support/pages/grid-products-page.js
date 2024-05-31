export class GridProductsPage {
    
    addProductContainsWordInName(name){
        cy.get('.prdocutname').contains(name).parent().parent().parent().within(()=>{
            cy.get('.productcart').click();
        })
    }
}    
export default new GridProductsPage()