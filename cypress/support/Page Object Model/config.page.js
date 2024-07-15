class confignPage{
    
    get configCloseModal(){ 
        return  cy.get('.Popover__StyledPopover-sc-1iog353-0 > .Button-sc-1dqy6lx-0')
    }
    get configProfile(){ 
        return cy.get(".SFgYidQmrqrFEVh65Zrg")
    } 
    get configPreferences(){ 
        return cy.get('.Vz3pFUXmll6fKB5Fc4nd');
    }
    get configLanguage(){ 
        return  cy.get('.zrvvPyoxE6wQNqnu0yWA')
    }
    get configRefrsh(){ 
        return cy.get('.WHEMY ')
    }
}
export default new confignPage();