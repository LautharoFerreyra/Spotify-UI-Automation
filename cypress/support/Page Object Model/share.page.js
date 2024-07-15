class sharePage{
    
    get shareButtom(){ 
        return  cy.get('[data-testid="action-bar-row"] > [data-testid="more-button"]')
    }
    get shareLi(){ 
        return  cy.get(':nth-child(7) > .vvMORUKtQKpQcpQ992bR')
    }
    get shareCopy(){ 
        return  cy.get('#tippy-5 > .NbcaczStd8vD2rHWwaKv > :nth-child(1) > .mWj8N7D_OlsbDgtQx5GW')
    }
    get shareLinkCopy(){
        return cy.get('.r4Hbxvv02KfOVeZ_v335 > .encore-text')
    }

}
export default new sharePage();