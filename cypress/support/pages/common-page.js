export class CommonPage {
    
    getContinueButton(){
        return cy.contains('button', 'Continue');
    }

    clickContinueButton(){
        return this.getContinueButton().click({force: true});
    }

    clickMainNav(option){
        cy.get('.navbar-right').within(() => {
            cy.get('a').contains(option).click({force: true});
        })
    }

    clickProductNavBar(option){
        cy.get('.categorymenu').within(() => {
            cy.get('a').contains(option).click({force: true});
        })
    }
}

export default new CommonPage()