
var webdriver = require('selenium-webdriver');
var chalk = require("chalk");

var session = require('marvin-js').session;

// returns a webdriver.promise that is resolved when the url changes.
// if an url is passed as parameter it will be considered as the current url,
// otherwise the current url is computed on the fly
module.exports = function(currentUrl) {

    console.log(chalk.yellow("Wait that url changes..."));

    var driver = session.getDriver();

    var deferred = new webdriver.promise.Deferred();
    var hasCompleted = false;

    function setCheck(url){
        var timer = setInterval(function() {
            driver.getCurrentUrl().then(function (newUrl) {
                if (url !== newUrl && !hasCompleted){
                    hasCompleted = true;
                    clearInterval(timer);
                    deferred.fulfill(url);
                }
            });
        }, 500);
    }

    if (currentUrl){
        setCheck(currentUrl);
    }
    else {
        driver.getCurrentUrl().then(function (url) {
            setCheck(url);
        });
    }

    return deferred;

};
