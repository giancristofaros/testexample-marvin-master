var chalk = require("chalk")
  , session = require('marvin-js').session
  , webdriver = session.getWebDriver()
  , By = webdriver.By
  , driver = session.getDriver()
  , Component = require('marvin-js').Component;


module.exports = new Component({

    firstProduct: {
        get: function () {
            return this.element("*[data-ytos-wishlistitem]:nth-child(1)");
        }
    },

    removeFirstProductBtn: {
        get: function () {
            return this.firstProduct.findElement(By.css('*[data-ytos-ctrl="account.removeItemFromWishList"]'));
        }
    },

    addToCartFirstProductBnt: {
        get: function () {
            return this.firstProduct.findElement(By.css('*[data-ytos-ctrl="cart.addItem"]'));
        }
    },

    emptyWishlist: {
        get: function () {
            return this.element('.emptyWishList');
        }
    }

});
