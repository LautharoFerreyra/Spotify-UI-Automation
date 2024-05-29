class songPage{ 
    
    get songNoche(){ 
        return cy.get('[data-testid="herocard-click-handler"]')
    }
    get playBtn (){
        return cy.get(".player-controls__left")
    }
    get playBtnAfterHeroCard(){
        return cy.get('[data-testid="action-bar-row"] > .ix_8kg3iUb9VS5SmTnBY > [data-testid="play-button"]')
    }
    get playBtnAfterHeroCard2 (){
        return cy.get('[data-testid="topbar-content"] > .ix_8kg3iUb9VS5SmTnBY > [data-testid="play-button"] > .ButtonInner-sc-14ud5tc-0')
    }
    get playBtn (){
        return
    }

}
export default new songPage();