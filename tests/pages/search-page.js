var session = require('marvin-js').session;
var Page = require('marvin-js').Page;

var disableCssTransitions = require('../utils/disable-transitions.js');

var homePage = require('../pages/home-page');

// components
var menuComponent = require('../components/menu');

module.exports = new Page({

    url: {value: '/'},

    onLoad: {
        value: function () {
            // remove transition, and loadings
            return disableCssTransitions();
        }
    },

    resetCSS: {
        value: function () {
            return disableCssTransitions();
        }
    },

    menu: {
        get: function () {
            return this.component(menuComponent, '#mainNav');
        }
    },

    // the products in the current search result
    products: {
        get: function () {
            return this.elements("#slot_189931");
        }
    },

    /*
     * Should be used to trigger a click on the first search result
     * */
    clickOnFirstProduct: {
        value: function () {
            return this.element('.//*[@id=\'slot_189931\']/div/div[1]/a/picture/img', 'xpath').click();
        }
    }

});