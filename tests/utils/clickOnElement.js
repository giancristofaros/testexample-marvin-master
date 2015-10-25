
var until = require('selenium-webdriver').until;
var error = require('selenium-webdriver').error;
var chalk = require('chalk');

module.exports = function (element) {
    return new until.Condition('click element when clickable', function () {
        var toBeClickable = false;
        return element.isDisplayed().then(
            function (disp) {
                console.log(chalk.bold.yellow("Element is displayed? --> " + disp));
                if(disp){
                    return element.isEnabled().then(function(enabled){
                        console.log(chalk.bold.yellow("Element is enabled? --> " + enabled));
                        if(enabled) {
                            toBeClickable = true;
                            console.log(chalk.bold.yellow("Element is clickable? --> " + toBeClickable));
                            element.click();
                        }
                        return enabled;
                    });
                }
                return false;
            }
        );
    });
};

//module.exports = function (element) {
//    return new until.Condition('click element when clickable', function () {
//        var toBeClickable = false;
//        do {
//            element.isDisplayed().then(
//                function (disp) {
//                    console.log(chalk.bold.yellow("Element is displayed? --> " + disp));
//                    if (disp) {
//                        return element.isEnabled().then(function (enabled) {
//                            console.log(chalk.bold.yellow("Element is enabled? --> " + enabled));
//                            if (enabled) {
//                                toBeClickable = true;
//                                console.log(chalk.bold.yellow("Element is clickable? --> " + toBeClickable));
//                                element.click();
//                            }
//                            return enabled;
//                        });
//                    }
//                    return false;
//                }
//            );
//        } while(!toBeClickable);
//        return toBeClickable;
//    });
//};
