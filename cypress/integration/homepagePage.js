class HomepagePage {
    visit() {
      cy.visit('http://demo-store.seleniumacademy.com/');
    }
  
    get searchInput() {
      return cy.get('input[name="q"]');
    }
  
    searchForProduct(productName) {
      this.searchInput.type(productName);
      this.searchInput.type('{enter}');
    }
  
    // Add other page-specific methods as needed
  }
  
  export default new HomepagePage();
  