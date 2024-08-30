import loginData from "../../test-data/login.js";
import loginPage from "../../support/Page Object Model/login.page.js";
import SearchPage from "../../support/Page Object Model/search.page";
import baseurl from "../../test-data/baseurl";

describe('View album info', () => {

    beforeEach(() => {
        cy.visit(baseurl.base);
        loginPage.iniLoginBtn.click();
        loginPage.userInput.type(loginData.validUser);
        loginPage.userPassword.type(loginData.validPassword);
        loginPage.loginBtn.click()
    });

    it('Album info', () => {
        SearchPage.searchButtom.click({ multiple: true });
        SearchPage.searchButtom.click().type("Una noche de rock");
        loginPage.blueMenuClose;
        SearchPage.searchHeroCard.click();
    });

});