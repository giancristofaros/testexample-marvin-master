var Component = require('marvin-js').Component;

var paymentMethodsMapper = {
    "creditcard": 1,
    "credit card": 1,
    "cc": 1,
    "paypal": 300,
    "cod": 2,
    "cashOnDelivery": 2,
    "cash on delivery": 2
};

module.exports = new Component({

    //element...
    paymentMethod: {
        value: function (methodType) {
            return this.element('input[id="AvailablePaymentMethodsViewModel_' + paymentMethodsMapper[methodType] + '"]');
        }
    },

    //actions...
    selectPaymentMethod: {
        value: function (methodType) {
            this.paymentMethod(methodType).click();
        }
    }

});
