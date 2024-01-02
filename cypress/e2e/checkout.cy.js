describe('checkout', () => {
  it('user can build a cart and place an order', () => {
    cy.visit('/');
    cy.findAllByTestId('thumbnail-component').should('have.length', 10);
    cy.findByRole('link', { name: /Tea/i }).click();
    cy.findByRole('button', { name: /Add to Cart/i }).click();
    cy.findByTestId('cart-quantity').should('contain', '1');
    cy.findByRole('button', { name: /Add to Cart/i }).click();
    cy.findByTestId('cart-quantity').should('contain', '2');
    cy.findByRole('link', { name: /Cart/i }).click();
    cy.findByLabelText(/Name/i);
    cy.findByRole('button', { name: /Order Now/i }).should('be.disabled');
    cy.findByLabelText(/Name/i).type('Big Nerd Ranch');
    cy.findByLabelText(/ZIP Code/i).type('30316');
    cy.findByRole('button', { name: /Order Now/i }).should('be.enabled');
    cy.findByRole('button', { name: /Order Now/i }).click();
    cy.findByTestId('cart-quantity').should('contain', '0');
    cy.findByText(/Thank you/i).should('be.visible');
  });
});