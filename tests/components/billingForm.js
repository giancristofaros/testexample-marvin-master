var chalk = require("chalk")
  , session = require('marvin-js').session
  , Component = require('marvin-js').Component;

var defaultValues = {
    "email": "mytestmail@yoox.com",
    "name": "Anakin",
    "surname": "Skywalker",
    "address": "a far away galaxy, 6",
    "city": "DeathStar",
    "zipCode": "12345",
    "province": "BA",
    "country": "IT",
    "phone": "123456789"
};

module.exports = new Component({

    /** FORM ELEMENTS **/
    inputEmail: {
        get: function () {
            return this.element('[name="BillingAddressViewModel.Email"]');
        }
    },

    inputName: {
        get: function () {
            return this.element('[name="BillingAddressViewModel.Name"]');
        }
    },

    inputSurname: {
        get: function () {
            return this.element('[name="BillingAddressViewModel.Surname"]');
        }
    },

    inputStreetWithNumber: {
        get: function () {
            return this.element('[name="BillingAddressViewModel.StreetWithNumber"]');
        }
    },

    inputCity: {
        get: function () {
            return this.element('[name="BillingAddressViewModel.City"]');
        }
    },

    inputPostalCode: {
        get: function () {
            return this.element('[name="BillingAddressViewModel.PostalCode"]');
        }
    },

    selectProvinces: {
        get: function () {
            return this.select('[data-ytos-provinces]');
        }
    },

    selectCountry: {
        get: function () {
            return this.select('[data-ytos-select-country-action]');
        }
    },

    inputPhone: {
        get: function () {
            return this.element('[name="BillingAddressViewModel.Phone"]');
        }
    },

    checkUserDefaultBillingAddressRadioButton : {
        value : function() {
            return this.element('.address input[type=radio]').click();
        }
    },

    verifyUserDefaultBillingAddressIsSelected: {
        get: function () {
            return this.element('li.billingDefault.selected').isDisplayed();
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
            this.selectCountry.selectOption(defaultValues.country);
            session.getDriver().sleep(1000)
                .then(function () {
                    this.selectProvinces.selectOption(provinceToSelect || defaultValues.province);
                }.bind(this));
            session.getDriver().sleep(1000)
                .then(function () {
                    this.inputPostalCode.sendKeys(defaultValues.zipCode);
                }.bind(this));

            return;
        }
    }

});
