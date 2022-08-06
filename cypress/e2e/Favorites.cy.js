describe('Favorites', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://fedeperin-harry-potter-api-en.herokuapp.com/characters', {
      fixture : 'harryPotter.json',
      fixture: 'favoriteCharacter.json',
      statusCode: 200
    });
    cy.visit('http://localhost:3000/');
    cy.get('.characters > :nth-child(1)').click()
    cy.url().should('eq', 'http://localhost:3000/details');
    cy.get('.App > [href="/favorites"] > button').click() 
    cy.url().should('eq', 'http://localhost:3000/favorites');
    cy.get('h1').contains('Welcome the Hogwarts');
    // cy.get('h2').contains('🧙🏻‍♀️ Hey, don\'t you have favorite character, Ca\'mon it is hogwarts\' world pick one them! 🧙🏼 ')

  })

  // it('Should be able to add character to favorites when clinking the add favorites button', () => {
  //   cy.visit('http://localhost:3000/details');
  //   cy.get('.App > [href="/favorites"] > button').click();
  //   cy.url().should('eq','http://localhost:3000/favorites')
  // });

  it('Should be able to go to home page when clinking go back button', () => {
    cy.get('h1').click();
    cy.url().should('eq','http://localhost:3000/');
  });

  it('Should be able to add character to favorites when clinking the add favorites button', () => {
    cy.get('#root > :nth-child(2) > button').click();
    cy.url().should('eq','http://localhost:3000/favorites')
  });

  it('Should contain the details about the character', () => {
    

    // cy.url().should('eq','http://localhost:3000/favorites')
    cy.get('#root > :nth-child(2) > button').click()
    cy.get('#root').children().should('have.length', 3)
    
    // cy.get('.character-poster').should('have.attr', 'src', 'https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/harry_potter.png')
    // cy.get('#root').contains('Harry James Potter')
    // cy.get('.favorites > div').contains('Harry James Potter')
      // cy.get('.character-poster').should('have.attr', 'src', 'https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/harry_potter.png')
      // cy.contains('Harry James Potter');
      // cy.contains('Harry');
      // cy.contains('YES');
      // cy.contains('Gryffindor');
      // cy.contains('Daniel Radcliffe');
      // cy.contains('James Sirius Potter') 
    // });
    // cy.get('#root').within(()=> {

    //   cy.get('.trash-btn').click
    // })
  });
})


//  it('Should be able to give error message once favorite page is empty', () => {
//     // cy.get('.App').within(()=> {
//     cy.get('h2').contains('🧙🏻‍♀️ Hey, don\'t you have favorite character, Ca\'mon it is hogwarts\' world pick one them! 🧙🏼 ')
//     // })
