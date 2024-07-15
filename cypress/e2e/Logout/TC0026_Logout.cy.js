import logoutPage from "../../support/Page Object Model/logout.page";
<<<<<<< HEAD
import configPage from "../../support/Page Object Model/config.page";
import loginPage from "../../support/Page Object Model/login.page";
import loginData from "../../test-data/login";
=======
import loginData from "../../test-data/login";
import loginPage from "../../support/Page Object Model/login.page";
import configPage from "../../support/Page Object Model/config.page";
>>>>>>> d1e1c83624659f7ffb3cd76344bb8668b0445768

describe("Logout", () => {
  beforeEach(() => {
    cy.visit('https://open.spotify.com/intl-es');
    loginPage.iniLoginBtn.click();
    loginPage.userInput.type(loginData.validUser);
    loginPage.userPassword.type(loginData.validPassword);
    loginPage.loginBtn.click()
  });

  beforeEach(() => {
      cy.visit('https://open.spotify.com/intl-es');
      loginPage.iniLoginBtn.click();
      loginPage.userInput.type(loginData.validUser);
      loginPage.userPassword.type(loginData.validPassword);
      loginPage.loginBtn.click();
      configPage.configCloseModal.click();
  });

  it("Logout", () => {
<<<<<<< HEAD
      configPage.configProfile.click();
      logoutPage.logoutBtn.contains('Cerrar sesión').click();
=======
    configPage.configProfile.click()
    logoutPage.logoutBtn.click();
>>>>>>> d1e1c83624659f7ffb3cd76344bb8668b0445768
  });

});