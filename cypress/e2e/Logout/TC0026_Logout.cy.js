import logoutPage from "../../support/Page Object Model/logout.page";
import loginData from "../../test-data/login";
import loginPage from "../../support/Page Object Model/login.page";
import configPage from "../../support/Page Object Model/config.page";

describe("Logout", () => {
  beforeEach(() => {
    cy.visit('https://open.spotify.com/intl-es');
    loginPage.iniLoginBtn.click();
    loginPage.userInput.type(loginData.validUser);
    loginPage.userPassword.type(loginData.validPassword);
    loginPage.loginBtn.click()
  });

  it("Logout", () => {
    configPage.configProfile.click()
    logoutPage.logoutBtn.click();
  });

});