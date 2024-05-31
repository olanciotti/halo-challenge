export class CreateAccountPage {

    setUserFirstName(firstName){
        return cy.get('#AccountFrm_firstname').type(firstName);
    }

    setUserLastName(lastName){
        return cy.get('#AccountFrm_lastname').type(lastName);
    }

    setUserEmail(email){
        return cy.get('#AccountFrm_email').type(email);
    }

    setUserPhone(phone){
        return cy.get('#AccountFrm_telephone').type(phone);
    }

    setUserFax(number){
        return cy.get('#AccountFrm_fax').type(number);
    }

    setUserAddress(address){
        return cy.get('#AccountFrm_address_1').type(address);
    }

    setUserCountry(country){
        return cy.get('select#AccountFrm_country_id').select(country);
    }

    setUserCity(city){
        return cy.get('#AccountFrm_city').type(city);
    }

    setUserZone(zone){
        return cy.get('select#AccountFrm_zone_id').select(zone);
    }
    
    setUserZipCode(zipcode){
        return cy.get('#AccountFrm_postcode').type(zipcode);
    }

    setUserLoginName(name){
        return cy.get('#AccountFrm_loginname').type(name);
    }

    setUserPassword(password){
        return cy.get('#AccountFrm_password').type(password);
    }

    setUserConfirmPassword(password){
        return cy.get('#AccountFrm_confirm').type(password);
    }

    acceptTermsAndPolicy(){
        return cy.get('#AccountFrm_agree').click();
    }

    completePersonalDetailsForm(data){
        this.setUserFirstName(data.firstName);
        this.setUserLastName(data.lastName);
        this.setUserEmail(data.email);
        this.setUserPhone(data.phone);
        this.setUserFax(data.fax);
    }

    suscribeToNewsletter(option){
        cy.get('input[name="newsletter"]').parent().contains(option).click();
    }
}

export default new CreateAccountPage()