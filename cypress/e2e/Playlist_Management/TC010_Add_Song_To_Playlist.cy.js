import loginData from "../../test-data/login";
import loginPage from "../../support/Page Object Model/login.page";
import searchPage from "../../support/Page Object Model/search.page";
import playListPage from "../../support/Page Object Model/playList.page";
import baseurl from "../../test-data/baseurl";

describe('Add song to a playlist',() => {

    beforeEach(() => {
        cy.visit(baseurl.base);
        loginPage.iniLoginBtn.click();
        loginPage.userInput.type(loginData.validUser);
        loginPage.userPassword.type(loginData.validPassword);
        loginPage.loginBtn.click()
    });

    it("Add song to a playlist", () => {
        searchPage.searchButtom.click({ multiple: true });
        searchPage.searchBard.click().type("Exit");
        searchPage.searchHeroCard.click();
        loginPage.body.scrollTo('top', {ensureScrollable: false})
        playListPage.optionButtom.click({force : true})
        playListPage.addToPlayList.contains('Agregar a playlist').click();
        playListPage.selectPlaylist.contains('Test Playlist').click({force : true}, {multiple : true});
        playListPage.confirmationAddSongToPlaylist.should ('be.visible')
    });
})