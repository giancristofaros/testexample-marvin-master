var chalk = require("chalk");
var Component = require('marvin-js').Component;

module.exports = new Component({

    inputName: {
        get: function () {
            return this.element('[name="GuestViewModel.Email"]');
        }
    },

    submitBtn: {
        get: function () {
            return this.element("button[type='submit']");
        }
    },

    submitBtnClick: {
        value: function () {
            return this.submitBtn.click();
        }
    },

    insertMail: {
        value: function (email) {
            return this.inputName.sendKeys(email);
        }
    }

});
