var chalk = require("chalk");
var Component = require('marvin-js').Component;

module.exports = new Component({

    inputName: {
        get: function () {
            return this.element("[data-ytos-loginname]");
        }
    },

    inputPassword: {
        get: function () {
            return this.element("[data-ytos-loginpassword]");
        }
    },


    // login form's submit button
    submitBtn: {
        get: function () {
            return this.element("button[type='submit']");
        }
    },

    login: {
        value: function (email, password) {

            password = password || 'password';

            if (!email) {
                throw new Error("Missing email.");
            }

            this.inputName.sendKeys(email);
            this.inputPassword.sendKeys(password);

            this.submitBtn.click();
        }
    }

});
