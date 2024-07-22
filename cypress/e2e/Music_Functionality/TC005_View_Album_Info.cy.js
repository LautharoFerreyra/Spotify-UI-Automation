import loginData from "../../test-data/login.js";
import loginPage from "../../support/Page Object Model/login.page.js";
import searchPage from "../../support/Page Object Model/search.page";
import songPage from "../../support/Page Object Model/song.page";
import playList from "../../support/Page Object Model/playList.page";
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
        searchPage.searchButtom.click({ multiple: true });
      searchPage.searchBard.click().type("Una noche de rock");
      searchPage.searchHeroCard.click();
      playList.optionButtom.click();

    });

});