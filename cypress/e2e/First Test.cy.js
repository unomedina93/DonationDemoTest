describe('Donation Demo', () => {
    it('Submit a donation', () => {
        cy.visit('https://qa-interview-test-org-467719.churchcenter.com/giving')
        cy.get("input[name='quantity']").type('12.52')
        cy.get("input[name='email_address']").type('unomedina93@gmail.com')
        cy.get("input[name='first_name']").type('Juan')
        cy.get("input[name='last_name']").type('Medina')
        cy.get('[data-cy="new_person_form_submit"]').click()
        //New section opens
        cy.get('.pl-0 > .checkbox-label').click()
        cy.get('.my-2 > .checkbox-label').click()

        //Credit Card Input
        cy.get('.__PrivateStripeElement > iframe')
            .its('0.contentDocument.body')
            .then(cy.wrap)
            .find('#Field-numberInput')
            .type('4242424242424242')

         //Expiration Date Input
        cy.get('.__PrivateStripeElement > iframe')
            .its('0.contentDocument.body')
            .then(cy.wrap)
            .find('#Field-expiryInput')
            .type('4242424242424242')
            
        //CVC Input
        cy.get('.__PrivateStripeElement > iframe')
            .its('0.contentDocument.body')
            .then(cy.wrap)
            .find('#Field-cvcInput')
            .type('123')

        //Country Selection
        cy.get('.__PrivateStripeElement > iframe')
            .its('0.contentDocument.body')
            .then(cy.wrap)
            .find('#Field-countryInput')
            .select('US')

        //Zipcode Input
        cy.get('.__PrivateStripeElement > iframe')
            .its('0.contentDocument.body')
            .then(cy.wrap)
            .find('#Field-postalCodeInput')
            .type('21742')

        //Submit Button
        cy.get("button.btn.ladda-button").click()
    
    })


})