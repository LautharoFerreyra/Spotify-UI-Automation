import loginData from "../../test-data/login.js";
import loginPage from "../../support/Page Object Model/login.page.js";
import SearchPage from "../../support/Page Object Model/search.page";
import songPage from "../../support/Page Object Model/song.page";
import playList from "../../support/Page Object Model/playList.page";

describe('View album info', () => {

    beforeEach(() => {
        cy.visit('https://open.spotify.com/intl-es');
        loginPage.iniLoginBtn.click();
        loginPage.userInput.type(loginData.validUser);
        loginPage.userPassword.type(loginData.validPassword);
        loginPage.loginBtn.click()
    });

    it('Album info', () => {
        SearchPage.searchButtom.click({ multiple: true });
      SearchPage.searchBard.click().type("Una noche de rock");
      SearchPage.searchHeroCard.click();
      playList.optionButtom.click();

    });

});