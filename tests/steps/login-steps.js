
var moonraker = require("marvin-js");

var session = require('marvin-js').session;
//var chalk = require("chalk");

var homePage = require('../pages/home-page');

//var domain = require('domain').create();
//var emitter = require('events').EventEmitter;
//var unStalenessOf = require('../utils/unStalenessOf');
//var error = require('selenium-webdriver').error;
//var waitReady = require('../utils/waitReady');
var clickOnElement = require('../utils/clickOnElement');

var By = require('selenium-webdriver').By;

exports.define = function (steps) {

    /*
     * @name "I click on the element $linkId" - HOMEPAGE
     * @type Step
     * @description Should be used to click a link of the menu with a specific css id. For example: I click on the link 'emporio_donna'.
     * */
    steps.when(/I click on the element <$linkId>/, function (linkId) {

        homePage.menu.clickOn(linkId);

    });

    /*
     * @name "I click on the login button" - HOMEPAGE
     * @type Step
     * @description Should be used to click on the login button.
     * */
    steps.when(/I click on the login button in topbar/, function () {

        var driver = session.getDriver();
        driver.sleep(5000);

        homePage.waitFor(clickOnElement(homePage.topbar.loginRegistrationLayerBtn));

        //console.log(chalk.bold.yellow("*** Before Wait ******************"));
        //homePage.waitFor(unStalenessOf(homePage.menu.loginBtn)).then(function(unStale) {
        //    console.log(chalk.bold.yellow("Element is stale? --> " + !(unStale)));
        //    console.log(chalk.bold.yellow("*** After Wait ***************"));
        //    homePage.menu.loginBtn.click();
        //});

        //var result = false;
        //var attempts = 0;
        //while(attempts < 10) {
        //    try {
        //        homePage.menu.loginBtn.click();
        //        console.log(chalk.bold.yellow("Element IS NOT stale"));
        //        result = true;
        //        break;
        //    } catch (e) {
        //        if (e.code === error.ErrorCode.STALE_ELEMENT_REFERENCE) {
        //            console.log(chalk.bold.green(e.message));
        //            console.log(chalk.bold.red("Element IS stale"));
        //            driver.sleep(2000);
        //        }
        //    }
        //    attempts++;
        //}
        //return result;

        //domain.on('StaleElementReferenceException', function(err) {
        //    // handle the error safely
        //    console.log(err.message);
        //    console.log(chalk.bold.green("LOGIN ERROR"));
        //    driver.sleep(1000);
        //});
        //// catch the uncaught errors in this asynchronous or synchronous code block
        //domain.run(function() {
        //    // the asynchronous or synchronous code that we want to catch thrown errors on
        //    homePage.menu.loginBtn.click();
        //});

        //emitter.on('StaleElementReferenceException', function (err) {
        //    console.log('error, but oh well', er.message);
        //    driver.sleep(1000);
        //});
        //homePage.menu.loginBtn.click();

        //var driver = session.getDriver();
        //return driver.wait(function() {
        //    return homePage.menu.loginBtn.click().
        //        then(function() {
        //            console.log(chalk.bold.yellow("Element IS NOT stale"));
        //            return true;
        //        }).
        //        then(null, function(e) {
        //            if (e.code === error.ErrorCode.STALE_ELEMENT_REFERENCE) {
        //                console.log(chalk.bold.red("Element IS stale"));
        //                return false;
        //            }
        //            throw e;
        //        });
        //}, 60000, 'Element shouldn't be stale at this point');


        //var clicked = false;
        //
        //function(){
        //    try {
        //        homePage.menu.loginBtn.click();
        //        clicked = true;
        //    } catch (e) {
        //        if(e instanceof StaleElementReferenceException) {
        //            console.log(chalk.bold.green(e.getMessage()));
        //        }
        //    }
        //    return clicked;
        //}

    });

    /*
     * @name "I try to login as $username, $password" - HOMEPAGE
     * @type Step
     * @description Should be used in che home page, in order to proceed as a logged user.
     * */
    steps.when(/I try to login as $username, $password/, function (user, pass) {
        
        homePage.loginRegistrationLayer.login(user, pass);
        //homePage.waitFor(homePage.emailInput.isDisplayed().then(
        //    function (disp) {
        //        console.log(chalk.bold.yellow("Element is displayed? --> " + disp));
        //        if(disp){
        //            return homePage.emailInput.isEnabled().then(function(enabled){
        //                console.log(chalk.bold.yellow("Element is enabled? --> " + enabled));
        //                if(enabled) {
        //                    toBeClickable = true;
        //                }
        //                return enabled;
        //            });
        //        }
        //        return false;
        //    }
        //));
        //
        //homePage.waitFor(homePage.passwordInput.isDisplayed().then(
        //    function (disp) {
        //        console.log(chalk.bold.yellow("Element is displayed? --> " + disp));
        //        if(disp){
        //            return homePage.passwordInput.isEnabled().then(function(enabled){
        //                console.log(chalk.bold.yellow("Element is enabled? --> " + enabled));
        //                if(enabled) {
        //                    toBeClickable = true;
        //                }
        //                return enabled;
        //            });
        //        }
        //        return false;
        //    }
        //));
        //
        //homePage.waitFor(homePage.passwordInput.isDisplayed().then(
        //    function (disp) {
        //        console.log(chalk.bold.yellow("Element is displayed? --> " + disp));
        //        if(disp){
        //            return homePage.passwordInput.isEnabled().then(function(enabled){
        //                console.log(chalk.bold.yellow("Element is enabled? --> " + enabled));
        //                if(enabled) {
        //                    toBeClickable = true;
        //                }
        //                return enabled;
        //            });
        //        }
        //        return false;
        //    }
        //));

        

    });
};
