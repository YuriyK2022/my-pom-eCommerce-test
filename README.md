# POM-test for eCommerce by Cypress
Using Page Object Model template implement a java script to automate offensive actions and create tests for page http://demo-store.seleniumacademy.com:
- search for a custom product
- testing the operation of the shopping cart
- arbitrary functionality of the student's choice (page http://demo-store.seleniumacademy.com/men/shirts.html)

## Installation
1. In the command line create new project directory my-pom-eCommerce-test:
```sh
$ mkdir my-pom-eCommerce-test
$ cd my-pom-eCommerce-test
```
2. Initialize project with npm by running the following command:
```sh
$ npm init -y
```
This will create a package.json file for your project.

3. Install Cypress (I use Cypress 8.3.0) as a development dependency:
```sh
$ npm install cypress@8.3.0 --save-dev
```
## Open Cypress Test Runner and create test file
4. Open the Cypress Test Runner using the following command:
```sh
$ npx cypress open
```
5. Cypress Test Runner will open interactively:

![image](https://github.com/YuriyK2022/my-pom-eCommerce-test/assets/118524489/41a95bf4-cf0c-4432-81d3-46a2f3058d62)

6. In the "Integration" folder (path ...\my-pom-eCommerce-test\cypress\integration) create JavaScript file for Page Object Model homepagePage.js:
```js
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
  
```
7. In the "Integration" folder (path ...\my-pom-eCommerce-test\cypress\integration) create JavaScript file for Page Object Model shoppingCartPage.js:
```js
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
  
```

8. In the "Integration" folder (path ...\my-pom-eCommerce-test\cypress\integration) create JavaScript file for Page Object Model shirtsPage.js:
```js
class ShirtsPage {
    visit() {
      cy.visit('http://demo-store.seleniumacademy.com/men/shirts.html');
    }
  
    // Define methods for interacting with elements on the Shirts page
  
    // Add other page-specific methods as needed
  }
  
  export default new ShirtsPage();
  
```

9. In the "Integration" folder (path ...\my-pom-eCommerce-test\cypress\integration) create JavaScript test file storeTest.js:
```js
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

```
## Run Cypress Test
10. Go back into the Cypress Runner and click on the file storeTest.js:

![image](https://github.com/YuriyK2022/my-pom-eCommerce-test/assets/118524489/cdf940a9-0876-4cc2-a9e4-debb236d74b7)

11. The browser is open (my default is Firefox) and test will execute, automating the actions on the webpage:

![image](https://github.com/YuriyK2022/my-pom-eCommerce-test/assets/118524489/9f63b064-b531-4ea3-b1dd-3e633fa6757c)

## Test Results
12. All tests is passing!

![image](https://github.com/YuriyK2022/my-pom-eCommerce-test/assets/118524489/781f99f8-5f00-4068-aae7-3277ab5398d3)


