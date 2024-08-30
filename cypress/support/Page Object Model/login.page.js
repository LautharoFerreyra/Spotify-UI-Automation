class loginPage{ 
    
    get iniLoginBtn(){ 
        return cy.get('[data-testid="login-button"]')
    }
    get blueMenuClose(){
       return  cy.get('.encore-announcement-set > .Button-sc-1dqy6lx-0').click()
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
    get passwordShow(){
        return cy.get('[data-testid="login-password-preview"]')
    }
    get wrongUserPass(){
        return cy.get('[data-encore-id="banner"]')
    }
    get btnCloseSetting(){
        return cy.get('.Button-sc-1dqy6lx-0')
    }
    get cookieBtn(){
        return cy.get('#onetrust-close-btn-container > .onetrust-close-btn-handler')
    }
    get body(){
        return cy.get('[data-testid="track-page"] > :nth-child(4)')
    }
}
export default new loginPage();
