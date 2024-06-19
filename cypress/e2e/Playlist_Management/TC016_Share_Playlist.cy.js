import loginData from "../../test-data/login";
import loginPage from "../../support/Page Object Model/login.page";
import playListPage from "../../support/Page Object Model/playList.page";
import 'cypress-file-upload';


describe('The Home Page',() => {

    beforeEach(() => {
        cy.visit('https://open.spotify.com/intl-es');
        loginPage.iniLoginBtn.click();
        loginPage.userInput.type(loginData.validUser);
        loginPage.userPassword.type(loginData.validPassword);
        loginPage.loginBtn.click()
    });

    it("Share a playlist", () => {
      
    });
})