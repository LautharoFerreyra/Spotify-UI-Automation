class sharePage{
    
    get shareButtom(){ 
        return  cy.get('.cqasRA')
    }
    get shareLi(){ 
        return  cy.get('.lQEXaOyKiOHRJAkTf1EF')
    }
    get shareCopy(){ 
        return  cy.get('.rQ6LXqVlEOGZdGIG0LgP')
    }

}
export default new sharePage();