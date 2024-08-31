class searchPage{ 
    
    get searchButtom(){
        return cy.get('[data-testid="search-input"]')
    }
    get searchBard(){ 
        return cy.get('[data-testid="top-result-card"]')
    }
    get searchHeroCard(){ 
        return cy.get(".mXNT9H2GU7lDW4cGx0q1")
    }
    get dukiCard(){
        return cy.get ('.XLAiqekZxk4Z7Nok9a58')
    }
}
export default new searchPage();