
var webdriver = require('selenium-webdriver');
var chalk = require("chalk");

var config = require('marvin-js').config;
var session = require('marvin-js').session;

// Select an element from the DOM,
// waiting a custom timeout
module.exports = function(selector, time) {

    var driver = session.getDriver();

    // short timeout
    driver.manage().timeouts().implicitlyWait(time || 3000);

    return driver.findElement(webdriver.By.css(selector)).then(function(el){
        // restore original timeout
        driver.manage().timeouts().implicitlyWait(config.elementTimeout || 3000);
        return el;
    }, function() {
        // restore original timeout
        driver.manage().timeouts().implicitlyWait(config.elementTimeout || 3000);
        return null;
    });

};

// Usage:
// var find = require('../utils/findElement');
// find("body#notexists", 1000).then(function(el) {
//    console.log(chalk.green(el ? "exists" : "not exists"));
// });
