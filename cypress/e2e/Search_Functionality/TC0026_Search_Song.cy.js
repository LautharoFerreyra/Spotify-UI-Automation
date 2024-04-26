import loginData from "../../test-data/login.js";
import loginPage from "../../support/Page Object Model/login.page.js";
import SearchPage from "../../support/Page Object Model/Search.page.js";

describe('Search Songs', () => {

    beforeEach(() => {
      cy.visit('https://open.spotify.com/intl-es');
      loginPage.iniLoginBtn.click();
      loginPage.userInput.type(loginData.validUser);
      loginPage.userPassword.type(loginData.validPassword);
      loginPage.loginBtn.click()
    });

    it('Search Song', () => {
        SearchPage.searchButtom.click({ multiple: true } );
        SearchPage.searchBard.click().type("Una noche de rock"); 
        
    
    });
});