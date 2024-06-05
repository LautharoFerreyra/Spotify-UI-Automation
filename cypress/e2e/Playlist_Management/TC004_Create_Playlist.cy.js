import loginData from "../../test-data/login";
import loginPage from "../../support/Page Object Model/login.page";
import playListPage from "../../support/Page Object Model/playList.page";
import 'cypress-file-upload';


describe('The Home Page',() => {

    beforeEach(() => {
        cy.visit('https://open.spotify.com/intl-es');
        loginPage.iniLoginBtn.click();
        loginPage.userInput.type(loginData.validUser);
        loginPage.userPassword.type(loginData.validPassword);
        loginPage.loginBtn.click()
    });

    it("Create a playlist", () => {
      playListPage.createPlaylist.click();
      playListPage.createNewPlaylist.click(); 
      playListPage.playlistTitle.click({force : true});
      playListPage.playlistName.type("Test Playlist");
      playListPage.playlistDescription.type("Test Description");
      const imagePath = "nan01.jpg";
      playListPage.playlistImagen.attachFile(imagePath);
      playListPage.playlistSaveData.click(); 
    });
})