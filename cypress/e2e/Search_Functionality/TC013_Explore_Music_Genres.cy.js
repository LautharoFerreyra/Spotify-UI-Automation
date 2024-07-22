
import loginData from "../../test-data/login.js";
import loginPage from "../../support/Page Object Model/login.page.js";
import baseurl from "../../test-data/baseurl";

describe('Login with correct credentials', () => {

    beforeEach(() => {
        cy.visit(baseurl.base);
        loginPage.iniLoginBtn.click();
        loginPage.userInput.type(loginData.validUser);
        loginPage.userPassword.type(loginData.validPassword);
        loginPage.loginBtn.click()
    });

    it('Correct credentials', () => {

    });

});