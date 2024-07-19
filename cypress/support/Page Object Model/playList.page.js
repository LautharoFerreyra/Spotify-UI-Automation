class playList{
    
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
    get playlistImagen(){
        return cy.get(".wcftliF4QjZKB1CYgEON")
    }
    get optionButtom(){
        return cy.get('[data-testid="action-bar-row"] > [data-testid="more-button"]')
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
    get confirmationAddSongToPlaylist(){
        return cy.get('.encore-announcement-set > .Button-sc-1dqy6lx-0')
    }
    get playlistApril(){
        return cy.get('.JFDEiqT_8B5zeG_CDSdK')
    }
    get shareButtom(){
        return cy.get('.lQEXaOyKiOHRJAkTf1EF')
    }
    get copyLinkButtom(){
        return cy.get('.mWj8N7D_OlsbDgtQx5GW')
    }
    get modalCopyConfirmation(){
        return cy.get('.encore-announcement-set > .Button-sc-1dqy6lx-0')
    }
}
export default new playList();