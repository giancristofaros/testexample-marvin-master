
var moonraker = require("marvin-js");

var session = require('marvin-js').session;
var chalk = require("chalk");
var assert = require("chai").assert;

var homePage = require('../pages/home-page');

//var domain = require('domain').create();
//var emitter = require('events').EventEmitter;
//var unStalenessOf = require('../utils/unStalenessOf');
//var error = require('selenium-webdriver').error;
//var waitReady = require('../utils/waitReady');
var clickOnElement = require('../utils/clickOnElement');

//var By = require('selenium-webdriver').By;

exports.define = function (steps) {

    /*
     * @name "I click on the login button in topbar" - HOMEPAGE
     * @type Step
     * @description Should be used to click on the login button.
     * */
    /*
    steps.when(/I click on the login button in topbar/, function () {

        var driver = session.getDriver();
        driver.sleep(4000);

        homePage.waitFor(clickOnElement(homePage.topbar.loginRegistrationLayerBtn));

    });
*/    
    /**
     * @name "I see the user register form" - HOMEPAGE
     * @type Assertion
     * @description Should be used to check that the login layer is visible
     */
    steps.when(/I see the user register form/, function () {

        // check the reister form element is present
        assert(homePage.loginRegistrationLayer.registrationFormElement.isDisplayed());
        
        var driver = session.getDriver();
        driver.sleep(8000);

    });
    
    
    
    
    
   
    
   
    
    
};