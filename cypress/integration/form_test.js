describe('Testing form inputs', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })
    it('Tests user input', () => {
        cy.get('[data-cy=special]')
        .type('test')
        .should('have.value', 'test')

        cy.get('[data-cy=toppings]')
        .check()
        // .should('be.checked')

        cy.get('[data-cy=submit]')
        .click()
    })
})