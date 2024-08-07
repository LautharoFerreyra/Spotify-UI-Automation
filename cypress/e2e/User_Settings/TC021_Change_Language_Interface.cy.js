import loginData from "../../test-data/login.js";
import loginPage from "../../support/Page Object Model/login.page.js";
import configPage from "../../support/Page Object Model/config.page.js";
import baseurl from "../../test-data/baseurl";


describe ('Change Languague', () => {

    beforeEach(() => {
      cy.visit(baseurl.base);
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

    it('Change to Afrikaans', () => {
        configPage.configProfile.click()
        configPage.configPreferences.click()
        configPage.configLanguage.select("af")
        configPage.configRefrsh.click()
    });
    it('Change to 日本語 ', () => {
        configPage.configProfile.click()
        configPage.configPreferences.click()
        configPage.configLanguage.select("ja")
        configPage.configRefrsh.click()
    });

    it('Change to 繁體中文', () => {
        configPage.configProfile.click()
        configPage.configPreferences.click()
        configPage.configLanguage.select("zh-HK")
        configPage.configRefrsh.click()
    });
    
    it('Change to Español de Latinoamérica', () => {
        configPage.configProfile.click()
        configPage.configPreferences.click()
        configPage.configLanguage.select("es-419")
        configPage.configRefrsh.click()
    });

}); 