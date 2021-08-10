it('TC02', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.url()
        .should('include', 'https://www.saucedemo.com')

    cy.get('[data-test="username"]')
        .type('standard_user')

    cy.get('input[data-test="username"]')
        .should('have.value', 'standard_user')

    cy.get('[data-test="password"]')
        .type('secret_sauce')

    cy.get('input[data-test="password"]')
        .should('have.value', 'secret_sauce')

    cy.get('[data-test="login-button"]')
        .click()
})