import baseurl from "../../test-data/baseurl";
import loginPage from "../../support/Page Object Model/login.page";
import loginData from "../../test-data/login";
import SearchPage from "../../support/Page Object Model/search.page";

describe( 'Explore podcast', ()=> {

    beforeEach(() => {
        cy.visit(baseurl.base)
        loginPage.iniLoginBtn.click();
        loginPage.userInput.type(loginData.validUser);
        loginPage.userPassword.type(loginData.validPassword);
        loginPage.loginBtn.click()
    });

    it('Search artist',()=>{
      SearchPage.searchButtom.click({ multiple: true });
      SearchPage.searchBard.click().type('Duki');
    })

})