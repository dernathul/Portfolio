describe('User can see a list of projects', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('#projects-tab').click();
  })

  it('displays first project', () => {
    cy.get('#project-1').within(() => {
      cy.get(('.image')).should('exist');
      cy.get('.ui.header').should('contain', 'My First Website');
      cy.get('.description').should('contain', 'This is my Blog in spanish, i have a career as an author, and i have been active blogging since the last decade');
    })
  })

  it('displays second project', () => {
    cy.get('#project-2').within(() => {
      cy.get(('.image')).should('exist');
      cy.get('.ui.header').should('contain', 'Ruby/Rails');
      cy.get('.description').should('contain', 'I did exercises of FizzBuzz, Atm, library, newsblog and legacy code challenges in this language and framework.');
    })
  });
    
  it('displays third project', () => {
    cy.get('#project-3').within(() => {
      cy.get(('.image')).should('exist');
      cy.get('.ui.header').should('contain', 'React');
      cy.get('.description').should('contain', "I create this web aplication with React, and tested with cypress. Looking forward to keep learning.");
    })
  });  
});
