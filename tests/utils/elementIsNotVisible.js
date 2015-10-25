
var session = require('marvin-js').session;
var By = require('selenium-webdriver').By;

var chalk = require("chalk");

module.exports = function(className) {

    var driver = session.getDriver();
    var displayed = false;
    return driver.wait(function(){
        driver.findElement(By.className(className)).isDisplayed().then(function(disp){
            displayed = !disp;
        });
        return displayed;
    }, 60000);

};
