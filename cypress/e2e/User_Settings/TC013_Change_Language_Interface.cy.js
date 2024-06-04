import loginData from "../../test-data/login.js";
import loginPage from "../../support/Page Object Model/login.page.js";
import configPage from "../../support/Page Object Model/config.page.js";


describe ('Change Languague', () => {

    beforeEach(() => {
        cy.visit('https://open.spotify.com/intl-es');
      loginPage.iniLoginBtn.click();
      loginPage.userInput.type(loginData.validUser);
      loginPage.userPassword.type(loginData.validPassword);
      loginPage.loginBtn.click()
      configPage.configCloseModal.click()
    });

    it('Change to English', () => {
        configPage.configProfile.click()
        configPage.configPreferences.click()
        configPage.configLanguage.select("en")
        configPage.configRefrsh.click()
    });

}); 