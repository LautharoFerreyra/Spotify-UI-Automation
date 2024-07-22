
import loginData from "../../test-data/login.js";
import loginPage from "../../support/Page Object Model/login.page.js";
import baseurl from "../../test-data/baseurl";
import searchPage from "../../support/Page Object Model/search.page";
import songPage from "../../support/Page Object Model/song.page";

describe('Login with correct credentials', () => {

    beforeEach(() => {
        cy.visit(baseurl.base);
        loginPage.iniLoginBtn.click();
        loginPage.userInput.type(loginData.validUser);
        loginPage.userPassword.type(loginData.validPassword);
        loginPage.loginBtn.click()
    });

    it('like a Song', () => {
       searchPage.searchButtom.click({ multiple: true });
      searchPage.searchBard.click().type("Exit");
      searchPage.searchHeroCard.click();
      songPage.likeBtn.click({force : true});
      cy.get('.r4Hbxvv02KfOVeZ_v335 > .encore-text').contains('Se agregó a Tus me gusta.').should('be.visible')
    });

});