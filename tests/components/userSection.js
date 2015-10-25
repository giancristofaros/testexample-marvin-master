var chalk = require("chalk")
var Component = require('marvin-js').Component;

module.exports = new Component({

    miniCartButton: {
        get: function() {
            return this.element('[data-target="minicart"]');
        }
    },

    wishlistLayerButton: {
        get: function() {
            return this.element('[data-target="wishlist"]');
        }
    },

    searchButton: {
        get: function() {
            return this.element('[data-target="search"]');
        }
    },

    accountButton: {
        get: function() {
            return this.element('[data-target="account"]');
        }
    }

});
