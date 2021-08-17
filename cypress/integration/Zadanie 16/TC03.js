it ('TC03', () => {
    
    cy.visit('https://www.saucedemo.com/')

    cy.url()
        .should('include', 'https://www.saucedemo.com')

    cy.get('[data-test="username"]')
        .type('standard_user')

    cy.get('[data-test="password"]')
        .type('secret_sauce')

    cy.get('[data-test="login-button"]')
        .click()

    cy.url()
        .should('include', '/inventory.html')

    cy.get('[class="title"]')    
       .contains('Products')
       .should('be.visible')

    cy.getCookie('session-username')
        .should('have.property', 'value', 'standard_user')
    
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
        .click()

    cy.get('[data-test="remove-sauce-labs-backpack"]')    
        .contains('Remove')
        .should('be.visible')

    cy.get('[class="shopping_cart_link"]')
        .contains('1')
        .should('be.visible')

    cy.get('[class="shopping_cart_link"]')
        .click()

    cy.get('[class="inventory_item_name"]')    
        .contains('Sauce Labs Backpack')
        .should('be.visible')

    cy.get('[class="inventory_item_price"]')    
        .contains('29.99')
        .should('be.visible')
    
    cy.get('[data-test="checkout"]')
        .click()

    cy.url()
        .should('include', '/checkout-step-one.html')
    
    cy.get('[data-test="firstname]')    
        .contains('[name="firstName"]')
        .should('be.visible')



})

