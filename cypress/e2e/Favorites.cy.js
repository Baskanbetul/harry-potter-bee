describe('Favorites', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://fedeperin-harry-potter-api-en.herokuapp.com/characters', {
      fixture : 'harryPotter.json',
      fixture: 'favoriteCharacter.json',
      statusCode: 200
    });
    cy.visit('http://localhost:3000/');
    cy.get('.characters > :nth-child(1)').click()
    cy.url().should('eq', 'http://localhost:3000/details/1');
    cy.get('.favorites').click() 
    cy.url().should('eq', 'http://localhost:3000/favorites');
    cy.get('h1').contains('Welcome to Hogwarts');
  });

  it('Should be able to go to home page when clinking go back button', () => {
    cy.get('h1').click();
    cy.url().should('eq','http://localhost:3000/');
  });

  it('Should contain the details about the character', () => {  
    // cy.get('#root').children().should('have.length', 3)
    cy.get('.favorite-container').within(()=> {
    cy.get('.character-poster').should('have.attr', 'src', 'https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/harry_potter.png');
    cy.get('#root').contains('Harry James Potter');      
    cy.get('.favorites > div > :nth-child(3)').contains('Harry');
    cy.get('div > :nth-child(4)').contains('YES');
    cy.get('div > :nth-child(5)').contains('Gryffindor');
    cy.get('div > :nth-child(6)').contains('Daniel Radcliffe');
    cy.get('div > :nth-child(7)').contains('Albus Severus Potter');
  })
    cy.get('.trash-btn').click()
    cy.url().should('eq', 'http://localhost:3000/favorites')
  });

  it('Should be able to give error message once favorite page is empty', () => {
    cy.get('.App').within(()=> {
      cy.get('h2').contains('🧙🏻‍♀️ Hey, don\'t you have favorite character, Ca\'mon it is hogwarts\' world pick one them! 🧙🏼 ')
    })
    cy.get('h1').click()
    cy.visit('http://localhost:3000/');
  })
})



