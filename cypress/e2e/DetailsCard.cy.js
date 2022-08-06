describe('Details Card', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://fedeperin-harry-potter-api-en.herokuapp.com/characters', {
      fixture : 'harryPotter.json',
      statusCode: 200
    });
    cy.visit('http://localhost:3000/');
    cy.get('.characters > :nth-child(1)').click()
    // cy.get('.characters').within(() => {
    //   cy.get('.character-poster').should('have.attr', 'src', 'https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/harry_potter.png')  
    //   cy.get(':nth-child(1) > a > .name').click();
		//   cy.url().should('eq', 'http://localhost:3000/details');
    // })
    // cy.get('h1').contains('Welcome the Hogwarts');
    cy.url().should('eq', 'http://localhost:3000/details');
  })

  // it('Should be able to go back to the home page when clicking logo', () => {
	// 	cy.get('h1').click();
	// 	cy.url().should('eq', 'http://localhost:3000/');
	// });

  // it('Should be able to go to favorites when clinking the button', () => {
	// 	cy.get('button').click();
	// 	cy.url().should('eq','http://localhost:3000/favorites');
	// });

  // it('Should be able to go to details page when clinking the image', () => {
  //   cy.get('.characters-card').within(() => {
  //     // cy.get('.character-poster').should('have.attr', 'src', 'https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/harry_potter.png')  
  //     cy.get('.characters > :nth-child(1)').click();
	// 	  cy.url().should('eq', 'http://localhost:3000/details');
  //   });
  //   });

  it('Should be able to go to details page when clinking the image', () => {
    // cy.get('.characters').within(() => {
    //   cy.get('.character-poster').should('have.attr', 'src', 'https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/harry_potter.png')  
    //   cy.get(':nth-child(1) > a > .name').click();
		//   cy.url().should('eq', 'http://localhost:3000/details');
    });
    });

  it('Should contain the details about the character', () => {
// 'details-card'
  })
