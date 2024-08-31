class logoutPage{
    get logoutBtn(){
        return cy.get('[data-testid="user-widget-dropdown-logout"]')
    }
}

export default new logoutPage();