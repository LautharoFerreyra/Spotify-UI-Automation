import loginData from "../../test-data/login.js";
import loginPage from "../../support/Page Object Model/login.page.js";
import SearchPage from "../../support/Page Object Model/search.page.js";
import podcastPage from "../../support/Page Object Model/podcast.page";
import baseurl from "../../test-data/baseurl";

describe( 'Explore podcast', ()=>{
    beforeEach( () => {
         cy.visit(baseurl.base);
    })



});