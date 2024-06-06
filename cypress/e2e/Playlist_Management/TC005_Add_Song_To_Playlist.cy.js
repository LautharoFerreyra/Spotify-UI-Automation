import loginData from "../../test-data/login";
import loginPage from "../../support/Page Object Model/login.page";
import searchPage from "../../support/Page Object Model/search.page";
import playListPage from "../../support/Page Object Model/playList.page";
import songPage from "../../support/Page Object Model/song.page"

describe('Add Song',() => {

    beforeEach(() => {
        cy.visit('/');
        loginPage.iniLoginBtn.click();
        loginPage.userInput.type(loginData.validUser);
        loginPage.userPassword.type(loginData.validPassword);
        loginPage.loginBtn.click()
    });

    it("Add song to a playlist", () => {
        searchPage.searchButtom.click({ multiple: true });
        searchPage.searchBard.click().type("Una noche de rock"); 
        searchPage.searchHeroCard.click();
        songPage.playBtnAfterHeroCard.then(($boton) => {
            if ($boton.length > 0) {
            $boton.click();
            } else {
                songPage.playBtnAfterHeroCard2.click();
        }});
        playListPage.optionButtom.click();
    });
})