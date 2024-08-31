import loginData from "../../test-data/login.js";
import loginPage from "../../support/Page Object Model/login.page.js";
import searchPage from "../../support/Page Object Model/search.page.js";
import songPage from "../../support/Page Object Model/song.page.js";
import baseurl from "../../test-data/baseurl";

describe('Play a song', () => {

  beforeEach(() => {
      cy.visit(baseurl.base);
      loginPage.iniLoginBtn.click();
      loginPage.userInput.type(loginData.validUser);
      loginPage.userPassword.type(loginData.validPassword);
      loginPage.loginBtn.click()
      searchPage.searchButtom.click({ multiple: true });
      loginPage.cookieBtn.click();
<<<<<<< HEAD
      searchPage.searchBard.click({ multiple: true }).type("Una noche de rock{enter}");
=======
      SearchPage.searchButtom.click({ multiple: true }).type("Una noche de rock{enter}"); 
>>>>>>> 4d6b7ffd5e8c7531c5f020f2cbdf322390e2e62e

  });

  it('Play a song', () => {
<<<<<<< HEAD
    searchPage.searchHeroCard.click({ multiple: true });
=======
    SearchPage.searchHeroCard.click({ force: true });
>>>>>>> 4d6b7ffd5e8c7531c5f020f2cbdf322390e2e62e
    songPage.playBtnAfterHeroCard.then(($btn) =>{
      if($btn.length > 0){
        cy.wrap($btn).click({force:true})
      }else{
        songPage.playBtnAfterHeroCard2.click();
      }
    });
  });

});