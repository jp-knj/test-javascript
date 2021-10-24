describe('registration', () => {
    it('should register a new user', () => {
        const user = { username: 'bob', password: 'yo'}

        cy.visit('/')
            .findByText('register/i')
            .click()
            .findByLabelText(/username/i)
            .type(user.username)
            .findByLabelText(/password/i)
            .type(user.password)
            .findByText(/submit/i)
            .click()
            .url()
            .should('eq', `${Cypress.config().baseUrl}/`)
            .window()
            .its('localStorage.token')
            .should('be.a', 'string')
            .findByTextId('username-display')
            .should('have.text', user.username)
    })
})