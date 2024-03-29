it ('TC03', () => {
 //pierwsza strona   
    cy.visit('https://www.saucedemo.com/')

    cy.url()
        .should('include', 'https://www.saucedemo.com')

    cy.get('[data-test="username"]')
        .type('standard_user')

    cy.get('[data-test="password"]')
        .type('secret_sauce')

    cy.get('[data-test="login-button"]')
        .click()
//druga strona
    cy.url()
        .should('include', '/inventory.html')

    cy.get('[class="title"]')    
       .contains('Products')
       .should('be.visible')

    cy.getCookie('session-username')
        .should('have.property', 'value', 'standard_user')
    
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
        .click()
//trzecia strona
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
//czwarta strona
    cy.url()
        .should('include', '/checkout-step-one.html')
    
    cy.get('[data-test="firstName"]')    
        .should('be.visible')

    cy.get('input')
        .eq(0)
        .invoke('attr', 'placeholder')
        .should('contain', 'First Name')

    cy.get('[data-test="lastName"]')    
        .should('be.visible')
    
    cy.get('input')
        .eq(1)
        .invoke('attr', 'placeholder')
        .should('contain', 'Last Name')
    
    cy.get('[data-test="postalCode"]')    
        .should('be.visible')

    cy.get('input')
        .eq(2)
        .invoke('attr','placeholder')
        .should('contain', 'Zip/Postal Code')

    cy.get('[data-test="firstName"]')
        .type('first')

    cy.get('[data-test="lastName"]')
        .type('last')

    cy.get('[data-test="postalCode"]')
        .type('0000')

    cy.get('[data-test="continue"]')
        .click()
//piąta strona
    cy.url()
        .should('include', '/checkout-step-two.html')

    cy.get('[data-test="finish"]')
        .click() 
//szósta strona
    cy.url()
        .should('include', '/checkout-complete.html')

    cy.get('[class="complete-header"]')    
        .contains('THANK YOU FOR YOUR ORDER')
        .should('be.visible')

        
})