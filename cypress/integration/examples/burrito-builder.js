context ('burrito-builder', () => {


    it('Should confirm that true is equal to true', () => {
      expect(true).to.equal(true)
    })

    it('should diplay orders', () => {
      cy.intercept('http://localhost:3001/api/v1/orders', {fixture:'orders.js'})
      cy.visit('http://localhost:3000/')
      .get('[data-cy=orders]').should('exist')
    })

    

})


// http://localhost:3001/api/v1/orders
