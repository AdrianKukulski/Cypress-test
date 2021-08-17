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
        .should('not.be.disabled')  

    cy.get('[data-test="login-button"]')
        .click()

    cy.url()
        .should('include', '/inventory.html')

    cy.get('[class="title"]')    
       .contains('Products')
       .should('be.visible')

    cy.getCookie('session-username')
        .should('have.property', 'value', 'standard_user')
})