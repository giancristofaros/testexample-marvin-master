var chalk = require("chalk")
  , session = require('marvin-js').session
  , webdriver = session.getWebDriver()
  , driver = session.getDriver()
  , By = webdriver.By
  , Component = require('marvin-jsr').Component;


module.exports = new Component({
    // the content of the minicart layer
    products: {
        get: function () {
            return this.element('ul.items');
        }
    },

    firstProduct: {
        get: function () {
            return this.element("*[data-ytos-shoppingbag-item]:nth-child(1)");
        }
    },

    emptyCartMessage: {
        get: function () {
            return this.element(".emptyCart");
        }
    },

    proceedToCheckoutBtn: {
        get: function () {
            return this.element('[data-ytos-action="gotocart"]');
        }
    },

    removeFirstProductBtn: {
        get: function () {
            return this.firstProduct.findElement(By.css('*[data-ytos-ctrl="cart.removeItem"]'));
        }
    },

    // actions...
    proceedToCheckout: {
        value: function () {
            return this.proceedToCheckoutBtn.click();
        }
    },

    removeFirstProduct: {
        value: function () {
            return this.removeFirstProductBtn.click();
        }
    },

    isShoppingBagEmpty: {
        value: function () {
            return driver.findElement(By.css(this.rootNode)).isElementPresent(By.css('.emptyCart'))
                .then(function(isElementPresent) {
                    return this.emptyCartMessage.isDisplayed();
                }.bind(this));
        }
    }

});
