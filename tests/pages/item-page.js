
//var chalk = require("chalk");

//var session = require('moonraker').session;

//var Page = require('moonraker').Page;

var session = require('marvin-js').session;
var Page = require('marvin-js').Page;


// components
var topbarComponent = require('../components/topbar');
var cartComponent = require('../components/cart');

module.exports = new Page({

    url: {value: '/'},

    topbar: { get: function () { return this.component(topbarComponent, "#siteHeader"); }},

    cart: { get: function () { return this.component(cartComponent, '[data-ytos-ctrl="cart.miniCart"]'); }},

    // the button that allows to add a product to the shopping bag
    addToCartBtn: { get: function () { return this.element('[data-ytos-ctrl="cart.addItem"]'); }},
    //addToCartBtn: { get: function () { return this.element('.//*[@id="buttonsEcommerce"]/button[2]', 'xpath'); }},

    // color dropdown
    colorSelect: { get: function () { return this.element('[data-ytos-ctrl="item.selectColor"]'); }},

    // size dropdown
    sizeSelect: { get: function () { return this.element('[data-ytos-ctrl="item.selectSize"]'); }},

    // model name label
    modelLabel: { get: function () { return this.element('[data-ytos-ctrl="item.modelName"]'); }},

    priceLabel: { get: function () { return this.element('div.priceContainer > [data-ytos-ctrl="item.priceUpdater"]'); }},

    // the first size in the size dropdown element
    firstSize: { get: function () { return this.element('.prettyselect-wrap li:first-child'); }},

    // the content of the minicart layer
    miniCartLayerContent: { get: function () { return this.element('[data-ytos-ctrl="cart.miniCart"] .inner'); }},

    // link to the shopping bag page
    shoppingBagLink: { get: function () { return this.element('[data-ytos-action="gotocart"]'); }},

    // the button that allows to proceed with the paypal express checkout
    proceedWithPaypalExpressCheckoutBtn: { get: function () { return this.element('[data-ytos-ctrl="paypalexpress.checkoutButton"]'); }},


    /*
     * Should be used in order to add an item to the shopping bag
     * */
    addToCart: {
        value: function () {
            this.sizeSelect.click();
            this.firstSize.click();
            return this.addToCartBtn.click();
        }
    },

    /*
     * Should be used to trigger a click on the link to the shopping bag page
     * */
    goToShoppingBag: {
        value: function () {
            return this.shoppingBagLink.then(function (elem) {
                elem.click();
            });
        }
    },

    /*
     * Should be used to trigger a click on the paypal express button
     * */
    goToPaypalExpress: {
        value: function () {
            return this.proceedWithPaypalExpressCheckoutBtn.then(function (elem) {
                elem.click();
            });
        }
    }

});

