var Component = require('marvin-js').Component;

var deliveryMethodsMapper = {
    "standard": 1,
    "express": 2
};

module.exports = new Component({

    //element...
    deliveryMethod: {
        value: function (methodType) {
            return this.element('input[id="AvailableDeliveryMethodsViewModel_' + deliveryMethodsMapper[methodType] + '"]');
        }
    },

    //actions...
    selectDeliveryMethod: {
        value: function (methodType) {
            this.deliveryMethod(methodType).click();
        }
    }

});
