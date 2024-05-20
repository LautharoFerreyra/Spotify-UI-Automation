describe('Iniciar sesión en Spotify con Google', () => {
    it('Inicia sesión con Google y redirige a Gmail', () => {
      cy.visit('https://accounts.spotify.com/');
      cy.window().then((win) => {
        cy.stub(win, 'open').as('open');
      });
      cy.get('@open').should('be.calledWith', Cypress.sinon.match((url) => {
        return url.includes('https://accounts.google.com/');
      }));
      cy.get('input[type="email"]').type('tucorreodegoogle@gmail.com');
      cy.contains('Siguiente').click();
      cy.get('input[type="password"]').type('tucontraseñadegoogle');
      cy.contains('Siguiente').click();
      cy.url().should('include', 'https://accounts.google.com/');
    });
  });
  