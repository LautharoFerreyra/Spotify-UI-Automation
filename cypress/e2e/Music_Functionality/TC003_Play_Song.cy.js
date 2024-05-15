escribe('Play a song', () => {

    beforeEach(() => {
      cy.visit('https://open.spotify.com/intl-es');
      loginPage.iniLoginBtn.click();
      loginPage.userInput.type(loginData.validUser);
      loginPage.userPassword.type(loginData.validPassword);
      loginPage.loginBtn.click()
      SearchPage.searchButtom.click({ multiple: true } );
        SearchPage.searchBard.click().type("Una noche de rock"); 
    });

    it('Play a song', () => {
      


    });

    it('Stop the song', () => {
      
    });
    it('Change the song to next', () => {
      
    });
    it('Change the song to previus', () => {
      
    });
    it('Change the song to previus', () => {
      
    });

});