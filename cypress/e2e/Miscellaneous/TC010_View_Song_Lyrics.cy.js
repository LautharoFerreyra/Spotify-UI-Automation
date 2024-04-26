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

    it('Correct credentials Show Password', () => {
      loginPage.iniLoginBtn.click();
      loginPage.userInput.type(loginData.validUser);
      loginPage.userPassword.type(loginData.validPassword);
      loginPage.passwordShow.click();
      loginPage.loginBtn.click()
    });

    it('Correct credentials Dont remeber', () => {
      loginPage.iniLoginBtn.click();
      loginPage.userInput.type(loginData.validUser);
      loginPage.userPassword.type(loginData.validPassword);
      loginPage.remeberBtn.click();
      loginPage.loginBtn.click()
    });
});