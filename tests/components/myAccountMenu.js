var chalk = require("chalk");
var Component = require('marvin-js').Component;

module.exports = new Component({

    profileButton: {
        get: function () {
            return this.element('[data-ytos-account-menu="profile"]');
        }
    },


    ordersButton: {
        get: function () {
            return this.element('[data-ytos-account-menu="orders"]');
        }
    },


    creditcardwalletButton: {
        get: function () {
            return this.element('[data-ytos-account-menu="creditcardwallet"]');
        }
    },

    addressbookButton: {
        get: function () {
            return this.element('[data-ytos-account-menu="addressbook"]');
        }
    },

    wishlistButton: {
        get: function () {
            return this.element('[data-ytos-account-menu="wishlist"]');
        }
    },

    logoutButton: {
        get: function () {
            return this.element('[data-ytos-ctrl="account.logout"]');
        }
    }

});
