class playListPage{ 
    
    get createPlaylist(){
        return cy.get('[style="display: block;"] > .Button-sc-1dqy6lx-0')
    }
    get createNewPlaylist(){
        return cy.get(':nth-child(1) > .mWj8N7D_OlsbDgtQx5GW')
    }
    get playlistTitle(){
        return cy.get(".o4KVKZmeHsoRZ2Ltl078")
    }
    get playlistName(){
        return cy.get(".JaGLdeBa2UaUMBT44vqI")
    }
    get playlistDescription(){
        return cy.get(".c0CddR8wF7kDxvU6uM8B")
    }
    get playlistSaveData(){
        return cy.get(".Up_Ke_BKTraatSMY_Po_")
    }
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
    get nameButtom(){ 
        return cy.get(".mXNT9H2GU7lDW4cGx0q1")
    }
    get picButtom(){ 
        return cy.get(".mXNT9H2GU7lDW4cGx0q1")
    }
    get ShuffleButtom(){ 
        return cy.get(".mXNT9H2GU7lDW4cGx0q1")
    }
    
    

}
export default new playListPage();