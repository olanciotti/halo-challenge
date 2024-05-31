export class CheckoutPage {

    setGuestFirstName(firstName){
        return cy.get('#guestFrm_firstname').type(firstName);
    }

    setGuestLastName(lastName){
        return cy.get('#guestFrm_lastname').type(lastName);
    }

    setGuestEmail(email){
        return cy.get('#guestFrm_email').type(email);
    }

    setGuestPhone(phone){
        return cy.get('#guestFrm_telephone').type(phone);
    }

    setGuestFax(phone){
        return cy.get('#guestFrm_fax').type(phone);
    }

    setGuestAddress(address){
        return cy.get('#guestFrm_address_1').type(address);
    }

    setGuestCountry(country){
        return cy.get('select#guestFrm_country_id').select(country);
    }

    setGuestCity(city){
        return cy.get('#guestFrm_city').type(city);
    }

    setGuestState(state){
        return cy.get('select#guestFrm_zone_id').select(state);
    }

    setGuestZipCode(zipCode){
        return  cy.get('#guestFrm_postcode').type(zipCode);
    }

    getContinueButton(){
        return cy.get('button[title="Continue"]');
    }

    clickContinueButton(){
        this.getContinueButton().click();
    }

    completeGuestPersonalDetailsForm(data){
        this.setGuestFirstName(data.firstName);
        this.setGuestLastName(data.lastName);
        this.setGuestEmail(data.email);
        this.setGuestPhone(data.phone);
        this.setGuestFax(data.fax);
    }
}


export default new CheckoutPage()