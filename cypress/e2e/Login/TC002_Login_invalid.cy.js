import loginData from "../../test-data/login.js";
import loginPage from "../../support/Page Object Model/login.page.js";
import baseurl from "../../test-data/baseurl";

describe('Login with wrong credentials', () => {

    beforeEach(() => {
      cy.visit(baseurl.base);
    });

    it('Invalid credentials', () => {
      loginPage.iniLoginBtn.click();
      loginPage.userInput.type(loginData.invalidUser);
      loginPage.userPassword.type(loginData.invalidPassword);
      loginPage.loginBtn.click()
    });

    it.only('Invalid credentials validation', () => {
        loginPage.iniLoginBtn.click();
        loginPage.userInput.type(loginData.invalidUser);
        loginPage.userPassword.type(loginData.invalidPassword);
        loginPage.loginBtn.click();
      });

    it('Invalid credentials Show Password', () => {
      loginPage.iniLoginBtn.click();
      loginPage.userInput.type(loginData.invalidUser);
      loginPage.userPassword.type(loginData.invalidPassword);
      loginPage.passwordShow.click();
      loginPage.loginBtn.click();
      loginPage.wrongUserPass.invoke('show')
    });

    it('Invalid credentials Dont remeber', () => {
      loginPage.iniLoginBtn.click();
      loginPage.userInput.type(loginData.invalidUser);
      loginPage.userPassword.type(loginData.invalidPassword);
      loginPage.remeberBtn.click();
      loginPage.loginBtn.click()
      loginPage.wrongUserPass.invoke('show')
    });
    it('Invalid credentials Dont remeber', () => {
        loginPage.iniLoginBtn.click();
        loginPage.userInput.type(loginData.invalidUser);
        loginPage.userPassword.type(loginData.invalidPassword);
        loginPage.remeberBtn.click();
        loginPage.loginBtn.click()
        loginPage.wrongUserPass.invoke('show')
    });
});
