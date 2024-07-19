import loginData from "../../test-data/login";
import loginPage from "../../support/Page Object Model/login.page";
import playListPage from "../../support/Page Object Model/playList.page";


describe('The Home Page',() => {

    beforeEach(() => {
        cy.visit('https://open.spotify.com/intl-es');
        loginPage.iniLoginBtn.click();
        loginPage.userInput.type(loginData.validUser);
        loginPage.userPassword.type(loginData.validPassword);
        loginPage.loginBtn.click()
        loginPage.blueMenuClose.click()
    });

    it("Share a playlist", () => {
        playListPage.playlistApril.contains('aPrIl list #24').click({force : true})
        playListPage.optionButtom.click({force : true});
        playListPage.shareButtom.contains('Compartir').click()
        playListPage.copyLinkButtom.contains('Copiar enlace a la playlist').click({force : true})
    });
})