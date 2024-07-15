import logoutPage from "../../support/Page Object Model/logout.page";
import configPage from "../../support/Page Object Model/config.page";
import loginPage from "../../support/Page Object Model/login.page";
import loginData from "../../test-data/login";

describe("Logout", () => {

  beforeEach(() => {
      cy.visit('https://open.spotify.com/intl-es');
      loginPage.iniLoginBtn.click();
      loginPage.userInput.type(loginData.validUser);
      loginPage.userPassword.type(loginData.validPassword);
      loginPage.loginBtn.click();
      configPage.configCloseModal.click();
  });

  it("Logout", () => {
      configPage.configProfile.click();
      logoutPage.logoutBtn.contains('Cerrar sesión').click();
  });

});