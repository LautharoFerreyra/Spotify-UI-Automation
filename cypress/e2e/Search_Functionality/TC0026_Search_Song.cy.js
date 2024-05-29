import loginData from "../../test-data/login.js";
import loginPage from "../../support/Page Object Model/login.page.js";
import SearchPage from "../../support/Page Object Model/search.page.js";
import songPage from "../../support/Page Object Model/song.page.js";

describe('Search Songs', () => {

    beforeEach(() => {
      cy.visit('https://open.spotify.com/intl-es');
      loginPage.iniLoginBtn.click();
      loginPage.userInput.type(loginData.validUser);
      loginPage.userPassword.type(loginData.validPassword);
      loginPage.loginBtn.click()
    });

    it('Search Song', () => {
      SearchPage.searchButtom.click({ multiple: true });
      SearchPage.searchBard.click().type("Una noche de rock"); 
      SearchPage.searchHeroCard.click();
      songPage.playBtnAfterHeroCard.then(($boton) => {
        if ($boton.length > 0) {
          $boton.click();
      } else {
          songPage.playBtnAfterHeroCard2.click();
      }});
    });
  
});