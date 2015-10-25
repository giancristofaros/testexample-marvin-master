var Component = require('marvin-js').Component
var utils = require('../utils/utils');

var deliveryMethodsMapper = {
    "standard": 1,
    "express": 2
};

function normalizeInnerText(innerText) {
    return innerText.replace(/^[\s\t]*/gm, '').toLowerCase();
}

function extractPrices(innerText) {
    var extractedPrices = innerText.match(/\d+[,.]?\d*/gm);
    var normalizedPrices;
    if (extractedPrices && extractedPrices.length > 0) {
        normalizedPrices = extractedPrices.map(function(price) {
            var normalizedPrice = price.replace(/\,/, '.');
            return parseFloat(normalizedPrice);
        });
    }
    return normalizedPrices ? normalizedPrices : 0;
}

module.exports = new Component({

    //element...

    cartInfoUpdater : {
        get : function() {
            return this.element('[data-ytos-ctrl="cart.cartInfoUpdater"]');
        }
    },

    cartInfoTotal : {
        get : function() {
            return this.element('.TotalToPay .value');
        }
    },

    paymentSubtotal : {
        get : function() {
            return this.element('.row.paymentSubtotal .value');
        }
    },

    deliverySubtotal : {
        get : function() {
            return this.element('.row.deliverySubtotal .value');
        }
    },

    //actions...

    getCartInfoText : {
        value : function() {
            return this.cartInfoUpdater.getText()
                .then(function(innerText) {
                    return normalizeInnerText(innerText);
                });
        }
    },

    getCartPrices : {
        value : function() {
            var promiseExtractedPrices =

                this.getCartInfoText()

                    .then(function(innerText) {
                        return extractPrices(innerText);
                    });

            return promiseExtractedPrices;
        }
    },

    getCartInfoTotalPrice : {
        value : function() {
            var promiseTotalPrice =

                this.cartInfoTotal.getText()

                    .then(function(innerText) {
                        innerText = normalizeInnerText(innerText);
                        return extractPrices(innerText);
                    });

            return promiseTotalPrice;
        }
    },

    getCartInfoPricesSum : {
        value : function() {
            var sumPromise =

                this.getCartPrices()

                    .then(function(pricesArray) {
                        var sum = 0;
                        for (var i = 0, priceToSum; priceToSum = pricesArray[i]; i++) {
                            sum += priceToSum;
                        }
                        return sum;
                    });

            return sumPromise;
        }
    },

    isSumOfCostsMatchedByTotal : {
        value : function() {
            this.getCartInfoTotalPrice()

                .then(function(totalPrice) {
                    this.getCartInfoPricesSum()

                        .then(function(sum) {
                            utils.priceEqual(totalPrice, sum).should.be.true;
                        });
                }.bind(this));
        }
    },

    getPaymentSubtotal : {
        value : function() {
            var paymentPromise =

                this.paymentSubtotal.getText()

                    .then(function(innerText) {
                        innerText = normalizeInnerText(innerText);
                        return extractPrices(innerText);
                    });

            return paymentPromise;
        }
    },

    getDeliverySubtotal : {
        value : function() {
            var deliveryPromise =

                this.deliverySubtotal.getText()

                    .then(function(innerText) {
                        innerText = normalizeInnerText(innerText);
                        return extractPrices(innerText);
                    });

            return deliveryPromise;
        }
    },

    salesTaxValue: {
        get: function () {
            return this.element('.SalesTax .value').getAttribute("data-ytos-price");
        }
    }

});
