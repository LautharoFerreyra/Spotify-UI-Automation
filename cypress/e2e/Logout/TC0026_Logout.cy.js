import logoutPage from "../../support/Page Object Model/logout.page";

describe("Logout", () => {

  it("Logout", () => {
    cy.login();
    logoutPage.logout();
  });

});