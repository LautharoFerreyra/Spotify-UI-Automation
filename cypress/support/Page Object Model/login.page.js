class loginPage{ 
    
    get iniLoginBtn(){ 
        return cy.get('[data-testid="login-button"] > .ButtonInner-sc-14ud5tc-0')
    }
    
    get userInput(){ 
        return cy.get('#login-username');
    }
    get userPassword(){ 
        return  cy.get('#login-password')
    }
    get loginBtn(){ 
        return cy.get('#login-button')
    }
    get remeberBtn(){
        return cy.get('.Indicator-sc-acu4qz-0')
    }
    get passwordShow(){
        return cy.get('[data-testid="login-password-preview"]')
    }

}
export default new loginPage();
