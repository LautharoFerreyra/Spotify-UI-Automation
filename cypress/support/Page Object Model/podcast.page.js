class podcastPage{

    get iniLoginBtn(){
        return cy.get('[data-testid="login-button"] > .ButtonInner-sc-14ud5tc-0')
    }
    get blueMenuClose(){
       return  cy.get('.encore-announcement-set > .Button-sc-1dqy6lx-0')
    }

}
export default new podcastPage();
