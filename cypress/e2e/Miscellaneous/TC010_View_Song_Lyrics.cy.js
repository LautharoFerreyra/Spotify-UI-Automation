import loginData from "../../test-data/login.js";
import loginPage from "../../support/Page Object Model/login.page.js";

describe('View songs Lyrics', () => {

    beforeEach(() => {
      cy.visit('https://open.spotify.com/intl-es');
      loginPage.iniLoginBtn.click();
      loginPage.userInput.type(loginData.validUser);
      loginPage.userPassword.type(loginData.validPassword);
      loginPage.loginBtn.click()
    });

    it('Go to song with lyrics', () => {
      
    });
});