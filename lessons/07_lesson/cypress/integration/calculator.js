describe('anonymous calculator', () => {
    it('can make calculations', () => {
        cy.visit('http://localhost:8080')
            .get('.')
    });
})