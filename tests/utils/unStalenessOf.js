
var until = require('selenium-webdriver').until;
var error = require('selenium-webdriver').error;
var chalk = require("chalk");

module.exports = function (element) {
    return new until.Condition('element to become not stale', function () {
        console.log(chalk.bold.yellow("Getting tag name of element..."));
        return element.getTagName().then(
            function (tagName) {
                console.log(chalk.bold.yellow("Tag name resolved as '" + tagName + "'"));
                return true;
            },
            function (e) {
                if (e.code === bot.ErrorCode.STALE_ELEMENT_REFERENCE) {
                    return false;
                }
                throw e;
            });
    });
};
