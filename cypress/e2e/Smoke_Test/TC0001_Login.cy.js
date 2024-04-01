
import loginData from "../../test-data/login";
import loginPage from "../../support/Page Object Model/login.page";

describe('Login with correct credentials', () => {

    beforeEach(() => {
      cy.visit('https://open.spotify.com/intl-es');
    });

    it.skip('Correct credentials', () => {
      loginPage.iniLoginBtn.click();
      loginPage.userInput.type(loginData.validUser);
      loginPage.userPassword.type(loginData.validPassword);
      loginPage.loginBtn.click()
    });

    it('Correct credentials Show Password', () => {
      loginPage.iniLoginBtn.click();
      loginPage.userInput.type(loginData.validUser);
      loginPage.userPassword.type(loginData.validPassword);
      loginPage.passwordShow.click();
      loginPage.loginBtn.click()
    });

    it.skip('Correct credentials Dont remeber', () => {
      loginPage.iniLoginBtn.click();
      loginPage.userInput.type(loginData.validUser);
      loginPage.userPassword.type(loginData.validPassword);
      loginPage.remeberBtn.click();
      loginPage.loginBtn.click()
    });
});