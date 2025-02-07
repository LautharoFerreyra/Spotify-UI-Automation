import loginData from "../../test-data/login.js";
import loginPage from "../../support/Page Object Model/login.page.js";
import baseurl from "../../test-data/baseurl";

describe('Login with correct credentials', () => {

    beforeEach(() => {
      cy.visit(baseurl.base);
    });

    it('Correct credentials', () => {
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

    it('Correct credentials Dont remeber', () => {
      loginPage.iniLoginBtn.click();
      loginPage.userInput.type(loginData.validUser);
      loginPage.userPassword.type(loginData.validPassword);
      loginPage.loginBtn.click()
    });
    it('Invalid credentials', () => {
      loginPage.iniLoginBtn.click();
      loginPage.userInput.type(loginData.invalidUser);
      loginPage.userPassword.type(loginData.invalidPassword);
      loginPage.loginBtn.click()
      loginPage.wrongUserPass.invoke('show')
    });
});