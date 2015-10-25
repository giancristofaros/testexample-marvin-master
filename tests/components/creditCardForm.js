var Component = require('marvin-js').Component;
var session = require('marvin-js').session;

module.exports = new Component({

    //element...
    cardType: {
        get: function () {
            return this.select('select[name="CreditCardFormLightViewModel.Type"]');
        }
    },

    cardNumberContainer: {
        get: function () {
            return this.element('[data-ytos-number-field]');
        }
    },

    cardNumber: {
        get: function () {
            return this.element('input[name="CreditCardFormLightViewModel.Number"]');
        }
    },

    expirationMonth: {
        get: function () {
            return this.select('select[data-ytos-date-type="month"]');
        }
    },

    expirationYear: {
        get: function () {
            return this.select('select[data-ytos-date-type="year"]');
        }
    },

    cvv: {
        get: function () {
            return this.element('input[name="CreditCardFormLightViewModel.Cvv"]');
        }
    },

    name: {
        get: function () {
            return this.element('input[name="CreditCardFormLightViewModel.Name"]');
        }
    },

    surname: {
        get: function () {
            return this.element('input[name="CreditCardFormLightViewModel.Surname"]');
        }
    },

    //actions...
    insertNumber: {
        value: function (value) {
            this.cardNumber.sendKeys(value);

            // Credit Card Number set, will refresh the form
            // ...so we need to trigger this set and wait a bit
            // otherwise any further step may fail
            this.cardNumberContainer.click();
            session.getDriver().sleep(1000);
        }
    },

    insertCvv: {
        value: function (value) {
            return this.cvv.sendKeys(value);
        }
    },

    insertName: {
        value: function (value) {
            return this.name.sendKeys(value);
        }
    },

    insertSurname: {
        value: function (value) {
            return this.surname.sendKeys(value);
        }
    },

    selectExpirationMonth: {
        value: function (value) {
            return this.expirationMonth.selectOption(value);
        }
    },

    selectExpirationYear: {
        value: function (value) {
            return this.expirationYear.selectOption(value);
        }
    },

    selectExpirationDate: {
        value: function (value) {
            var dateInfo = value.split('-'), month = dateInfo[0], year = dateInfo[1];
            this.selectExpirationMonth(month);
            this.selectExpirationYear(year);

            return;
        }
    }

});
