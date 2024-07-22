import loginData from "../../test-data/login.js";
import loginPage from "../../support/Page Object Model/login.page.js";
import searchPage from "../../support/Page Object Model/search.page.js";
import songPage from "../../support/Page Object Model/song.page.js";
import baseurl from "../../test-data/baseurl";

describe('Search Songs', () => {

    beforeEach(() => {
      cy.visit(baseurl.base);
      loginPage.iniLoginBtn.click();
      loginPage.userInput.type(loginData.validUser);
      loginPage.userPassword.type(loginData.validPassword);
      loginPage.loginBtn.click()
    });

    it('Search Song', () => {
      searchPage.searchButtom.click({ multiple: true });
      searchPage.searchBard.click().type("Una noche de rock");
      searchPage.searchHeroCard.click();
      songPage.playBtnAfterHeroCard.then(($boton) => {
        if ($boton.length > 0) {
          $boton.click();
      } else {
          songPage.playBtnAfterHeroCard2.click();
      }});
    });
  
});