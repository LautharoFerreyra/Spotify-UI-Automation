describe('Iniciar sesión en Spotify con Google', () => {
    it('Inicia sesión con Google y redirige a Gmail', () => {
      // Visita la página de inicio de sesión de Spotify
      cy.visit('https://accounts.spotify.com/');
  
      // Encuentra y haz clic en el botón "Continuar con Google"
      cy.contains('Continuar con Google').click();
  
      // Espera a que se abra la ventana emergente de Google para iniciar sesión
      cy.window().then((win) => {
        cy.stub(win, 'open').as('open');
      });
  
      cy.get('@open').should('be.calledWith', Cypress.sinon.match((url) => {
        return url.includes('https://accounts.google.com/');
      }));
  
      // Ingresa tu correo electrónico de Google en el campo de correo electrónico
      cy.get('input[type="email"]').type('tucorreodegoogle@gmail.com');
  
      // Haz clic en el botón "Siguiente" para ingresar la contraseña
      cy.contains('Siguiente').click();
  
      // Ingresa tu contraseña de Google en el campo de contraseña
      cy.get('input[type="password"]').type('tucontraseñadegoogle');
  
      // Haz clic en el botón "Siguiente" para iniciar sesión
      cy.contains('Siguiente').click();
  
      // Verifica que se haya iniciado sesión correctamente
      cy.url().should('include', 'https://accounts.google.com/');
  
      // Simula el proceso de inicio de sesión en Gmail si es necesario
      // Por ejemplo, ingresa tu correo electrónico y contraseña de Gmail
      // Luego, verifica que te redirija a la página de inicio de sesión de Spotify nuevamente
      // cy.url().should('include', 'https://accounts.spotify.com/'); // Descomenta esta línea si necesitas verificar la redirección a Spotify
  
      // Una vez que hayas completado el proceso de inicio de sesión en Spotify, verifica que estés en la página correcta
      // cy.url().should('include', 'https://www.spotify.com/'); // Descomenta esta línea si necesitas verificar la página de Spotify
    });
  });
  