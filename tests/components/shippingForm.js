var chalk = require("chalk")
var Component = require('marvin-js').Component;

var defaultValues = {
    "email": "mytestmail@yoox.com",
    "name": "Bart",
    "surname": "Simpson",
    "address": "Evergreen, 6",
    "city": "Springfield",
    "zipCode": "12345",
    "province": "BA",
    "phone": "123456789"
};

module.exports = new Component({

    /** FORM ELEMENTS **/
    inputEmail: {
        get: function () {
            return this.element('[name="ShippingAddressViewModel.Email"]');
        }
    },

    inputName: {
        get: function () {
            return this.element('[name="ShippingAddressViewModel.Name"]');
        }
    },

    inputSurname: {
        get: function () {
            return this.element('[name="ShippingAddressViewModel.Surname"]');
        }
    },

    inputStreetWithNumber: {
        get: function () {
            return this.element('[name="ShippingAddressViewModel.StreetWithNumber"]');
        }
    },

    inputCity: {
        get: function () {
            return this.element('[name="ShippingAddressViewModel.City"]');
        }
    },

    inputPostalCode: {
        get: function () {
            return this.element('[name="ShippingAddressViewModel.PostalCode"]');
        }
    },

    selectProvinces: {
        get: function () {
            return this.select('[data-ytos-provinces]');
        }
    },

    inputPhone: {
        get: function () {
            return this.element('[name="ShippingAddressViewModel.Phone"]');
        }
    },

    billingAsShipping: {
        get: function () {
            return this.element('[data-ytos-billingasshipping][type="checkbox"]');
        }
    },


    userDefaultShippingAddress : {
        get : function() {
            return this.element('.address.shippingDefault');
        }
    },

    userFirstShippingAddress : {
        get : function() {
            return this.element('.address');
        }
    },

    /** ACTIONS **/

    fillFormWithDefaultValues: {
        value: function (provinceToSelect) {
            this.inputName.sendKeys(defaultValues.name);
            this.inputSurname.sendKeys(defaultValues.surname);
            this.inputStreetWithNumber.sendKeys(defaultValues.address);
            this.inputCity.sendKeys(defaultValues.city);
            this.inputPhone.sendKeys(defaultValues.phone);
            this.inputPostalCode.sendKeys(defaultValues.zipCode);
            this.selectProvinces.selectOption(provinceToSelect || defaultValues.province);

            return;
        }
    },

    setBillingAsShipping: {
        value: function () {
            return this.billingAsShipping.getAttribute("checked").then(function (isChecked) {
                if (!isChecked) {
                    this.billingAsShipping.click();
                }
            }.bind(this));
        }
    },

    unsetBillingAsShipping: {
        value: function () {
            return this.billingAsShipping.getAttribute("checked").then(function (isChecked) {
                if (isChecked) {
                    this.billingAsShipping.click();
                }
            }.bind(this));
        }
    },

    checkUserDefaultShippingAddressRadioButton : {
        value : function() {
            return this.element('.address input[type=radio]').click();
        }
    }

});
