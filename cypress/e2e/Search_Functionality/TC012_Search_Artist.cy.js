import baseurl from "../../test-data/baseurl";
import loginPage from "../../support/Page Object Model/login.page";
import loginData from "../../test-data/login";
import searchPage from "../../support/Page Object Model/search.page";

describe( 'Explore podcast', ()=> {

    beforeEach(() => {
        cy.visit(baseurl.base)
        loginPage.iniLoginBtn.click();
        loginPage.userInput.type(loginData.validUser);
        loginPage.userPassword.type(loginData.validPassword);
        loginPage.loginBtn.click()
    });

    it('Search artist',()=>{
        searchPage.searchButtom.click({ multiple: true });
      searchPage.searchBard.click().type('Duki');
    })

})