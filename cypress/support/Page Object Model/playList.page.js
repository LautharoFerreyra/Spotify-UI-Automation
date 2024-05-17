class playListPage{ 
    
    get addButtom(){
        return cy.get(".KAcp7QFuEYSouAsuC5i_")
    }
    get removeButtom(){ 
        return cy.get(".CVuGEUIxLkNKpMds8AFS")
    }
    get shuffleButtom(){ 
        return cy.get(".mXNT9H2GU7lDW4cGx0q1")
    }
    get ShuffleButtom(){ 
        return cy.get(".mXNT9H2GU7lDW4cGx0q1")
    }
    
    
    

}
export default new playListPage();