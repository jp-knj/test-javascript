describe('login', () => {
    it('should login an existing user', () => {
        // create user
        const user = buildUser()
        cy.request({
            url: 'http://localhost:3000/register',
            method: 'POST',
            body: user,
        })

        cy.visit('/')
            .findByText(/login/i)
            .click()
            .findByLabelText(/username/i)
    })
}