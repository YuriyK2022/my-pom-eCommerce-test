class ShoppingCartPage {
    visit() {
      // Adjust the URL to match the shopping cart page
      cy.visit('http://demo-store.seleniumacademy.com/checkout/cart/');
    }
  
    get productInCart() {
      // Use a selector to identify a product in the cart
      return cy.get('.product-name');
    }
  
    get checkoutButton() {
      return cy.get('.btn-checkout');
    }
  
    get continueShoppingButton() {
      return cy.get('.btn-continue-shopping');
    }
  
    get emptyCartMessage() {
      return cy.get('.cart-empty');
    }
  
    verifyProductInCart(productName) {
      this.productInCart.should('contain', productName);
    }
  
    clickCheckout() {
      this.checkoutButton.click();
    }
  
    clickContinueShopping() {
      this.continueShoppingButton.click();
    }
  
    verifyCartIsEmpty() {
      this.emptyCartMessage.should('exist');
    }
  }
  
  export default new ShoppingCartPage();
  