// describe('Home', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://fedeperin-harry-potter-api-en.herokuapp.com/characters', {
      fixture : 'harryPotter.json',
      statusCode: 200
    });
    cy.visit('http://localhost:3000/');
  })

  it('The user should see the home page', () => {
    cy.get('h1').contains('Welcome the Hogwarts');
    cy.get('h3').contains('Select Your Character');
    cy.get('button').contains('Favorites')
    cy.get('.characters').within(() => {
    cy.get('.character-poster').should('have.attr', 'src', 'https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/harry_potter.png')  
  })
})
  
