export class LoginPage {
    
    setName(name){
        return cy.get('#loginFrm_loginname').type(name);
    }

    setPassword(password){
        return cy.get('#loginFrm_password').type(password);
    }

    getLoginButton(){
        return cy.get('button[title="Login"]')
    }

    clickLoginButton(){
        this.getLoginButton().click();
    }   

    getRegisterAccountRadiobutton(){
        return cy.get('#accountFrm_accountregister');
    }

    checkRegisterAccount(){
        this.getRegisterAccountRadiobutton().check();
    }

    getGuestCheckout(){
        return cy.get('#accountFrm_accountguest');
    }

    checkGuestCheckout(){
        this.getGuestCheckout().click();
    }
}

export default new LoginPage()