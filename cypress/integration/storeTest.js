import HomepagePage from './homepagePage';
import ShirtsPage from './shirtsPage';
import ShoppingCartPage from './shoppingCartPage';


describe('Store Test Suite', () => {
  it('should search for a product and test shopping cart', () => {
    // Visit the homepage
    HomepagePage.visit();

    HomepagePage.searchForProduct('Your Product Name');
    
  });
});

describe('Shirt Page Test Suite', () => {
    it('should search for a product and test shopping cart', () => {
  
      ShirtsPage.visit();
  
      
    });
});

describe('Shopping Cart Test', () => {
    it('should test the shopping cart functionality', () => {
      // Visit the shopping cart page
      ShoppingCartPage.visit();
  
      
    });
  });
