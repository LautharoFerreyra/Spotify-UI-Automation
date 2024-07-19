import loginData from "../../test-data/login.js";
import loginPage from "../../support/Page Object Model/login.page.js";
import SearchPage from "../../support/Page Object Model/search.page.js";
import podcastPage from "../../support/Page Object Model/podcast.page";
import baseurl from "../../test-data/baseurl";

describe( 'Explore podcast', ()=>{

    beforeEach( () =>{
        cy.visit(baseurl.base)
        loginPage.iniLoginBtn.click();
        loginPage.userInput.type(loginData.validUser);
        loginPage.userPassword.type(loginData.validPassword);
        loginPage.loginBtn.click()
    });
    it( 'podcast', ()=>{
        SearchPage.searchButtom.click({multiple : true})
        podcastPage.podcastCard.contains('Podcasts').click()
    });
    it( 'podcast ranking category', ()=>{
        SearchPage.searchButtom.click({multiple : true})
        podcastPage.podcastCard.contains('Podcasts').click()
        podcastPage.podcastsTypes.contains('Ranking de podcasts').click()
    })
    it( 'podcast Education category', ()=>{
        SearchPage.searchButtom.click({multiple : true})
        podcastPage.podcastCard.contains('Podcasts').click()
        podcastPage.podcastsTypes.contains('Educación').click()
    })
    it( 'podcast Documentals category', ()=>{
        SearchPage.searchButtom.click({multiple : true})
        podcastPage.podcastCard.contains('Podcasts').click()
        podcastPage.podcastsTypes.contains('Documentales').click()
    })
    it( 'podcast Comedi category', ()=>{
        SearchPage.searchButtom.click({multiple : true})
        podcastPage.podcastCard.contains('Podcasts').click()
        podcastPage.podcastsTypes.contains('Comedia').click()
    })
     it.only( 'podcast Books category', ()=>{
        SearchPage.searchButtom.click({multiple : true})
        podcastPage.podcastCard.contains('Podcasts').click()
        podcastPage.podcastsTypes.contains('Comedia').click()
    })




})