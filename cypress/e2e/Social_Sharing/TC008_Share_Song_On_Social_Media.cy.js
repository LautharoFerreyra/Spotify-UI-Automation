import loginData from "../../test-data/login.js";
import loginPage from "../../support/Page Object Model/login.page.js";
import SearchPage from "../../support/Page Object Model/search.page.js";
import songPage from "../../support/Page Object Model/song.page.js";
import sharePage from "../../support/Page Object Model/share.page.js";

describe('Share song', () => {

  beforeEach(() => {
      cy.visit('https://open.spotify.com/intl-es');
      loginPage.iniLoginBtn.click();
      loginPage.userInput.type(loginData.validUser);
      loginPage.userPassword.type(loginData.validPassword);
      loginPage.loginBtn.click()
      SearchPage.searchButtom.click({ multiple: true });
      loginPage.cookieBtn.click();
      SearchPage.searchBard.click({ multiple: true }).type("Una noche de rock{enter}");

  });

  it('Share a song', () => {
    SearchPage.searchHeroCard.click({ multiple: true });
    songPage.playBtnAfterHeroCard.then(($btn) =>{
      if($btn.length > 0){
        cy.wrap($btn).click({force:true})
      }else{
        songPage.playBtnAfterHeroCard2.click();
      };
    sharePage.shareButtom.click({force:true});
    sharePage.shareLi.click();
    sharePage.shareCopy.click();
    sharePage.shareLinkCopy.should("be.visible")
    });
  });
});