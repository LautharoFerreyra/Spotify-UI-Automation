import loginData from "../../test-data/login";
import loginPage from "../../support/Page Object Model/login.page";
import searchPage from "../../support/Page Object Model/search.page";
//import playlistPage from "../../support/Page Object Model/playlist.page";

describe('The Home Page',() => {

    beforeEach(() => {
        cy.visit('https://open.spotify.com/intl-es');
        loginPage.iniLoginBtn.click();
        loginPage.userInput.type(loginData.validUser);
        loginPage.userPassword.type(loginData.validPassword);
        loginPage.loginBtn.click()
    });

    it("Create a playlist", () => {
      
    });
})