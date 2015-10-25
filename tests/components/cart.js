
var chalk = require("chalk");

var Component = require('marvin-js').Component;

module.exports = new Component({

    // the button that allows to open the miniCart
    cartBtn: { get: function () { return this.element(".mainCartContainer .shoppingBag .mainCartLink .inner a"); }},

    // the cart container
    cartBox: { get: function () { return this.element("#miniCart > .inner"); }},

    cartImage: { get: function () { return this.element(".itemImg"); }},

    // the view shopping bag button inside miniCart
    //viewCartBtn: { get: function () { return this.element('.gotocart'); }},
    //viewCartBtn: { get: function () { return this.element('[data-ytos-action="gotocart"]'); }}, //UnknownError: unknown error: Element is not clickable at point (1263, 667). Other element would receive the click: <div class="gotocart">...</div>
    //viewCartBtn: { get: function () { return this.element('.//*[@id="miniCart"]/div/div/div/div[3]/a/span[2]', 'xpath'); }},

    // the checkout button inside miniCart
    checkoutBtn: { get: function () { return this.element('.goToCartLink'); }},

    totalPrices: { get: function () { return this.element('.totalPrices'); }},

    cartLoader: { get: function () { return this.element('.cartLoader'); }},

    // the items number counter in the shopping bag
    items: {
        get: function () {
            return this.elements(".shoppingBag .count");
        }
    },

    /*
     * Used to trigger a click on "menuBtn", in order to open the menu
     * */
    show: {
        value: function () {
            return this.cartBtn.click();
        }
    },

    /*
     * Used to trigger a click on "viewCartBtn", in order to open the cart
     * */
    viewCart: {
        value: function () {
            return this.viewCartBtn.click();
        }
    },

    /*
     * Used to trigger a click on "checkoutBtn", in order to proceed with checkout
     * */
    checkout: {
        value: function () {
            return this.checkoutBtn.click();
        }
    },

    /*
     * Used to trigger a click on a specific selector
     * */
    clickOn: {
        value: function (locator) {
            return this.element(locator).click();
        }
    }

});
