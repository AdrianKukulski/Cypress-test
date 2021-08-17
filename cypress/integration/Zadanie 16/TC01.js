it('TC01', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="login-button"]')
        .click()

    cy.url()
        .should('include','https://www.saucedemo.com')

    cy.get('[data-test="error"]')
        .should('be.visible')
})