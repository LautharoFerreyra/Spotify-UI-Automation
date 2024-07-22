import baseurl from "../../test-data/baseurl";
import loginPage from "../../support/Page Object Model/login.page";
import loginData from "../../test-data/login";
import searchPage from "../../support/Page Object Model/search.page";
import artistPage from "../../support/Page Object Model/artist.page";

describe( 'Follow artist', ()=> {

    beforeEach(() => {
        cy.visit(baseurl.base)
        loginPage.iniLoginBtn.click();
        loginPage.userInput.type(loginData.validUser);
        loginPage.userPassword.type(loginData.validPassword);
        loginPage.loginBtn.click()
    });

    it('Follow artist',()=>{
        searchPage.searchButtom.click({ multiple: true });
        searchPage.searchBard.click().type('Duki');
        searchPage.dukiCard.contains('Duki').click({force : true})
        artistPage.followBtn.contains('Seguir').click({force : true});
    })

})