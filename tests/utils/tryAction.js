
var session = require('marvin-js').session;
var By = require('selenium-webdriver').By;

module.exports = function(locator, operation) {

    var displayed = false, clicked = false;
    var driver = session.getDriver();

    if(operation == "click"){
        driver.wait(function(){
            try {
                // add item to cart
                driver.findElement(By.className(locator)).click();
                clicked = true;
            } catch (e) {
                if(e instanceof StaleElementReferenceException) {
                    console.log(chalk.bold.green("Trying again..."));
                }
            }
            return clicked;
        }, 60000);
    } else if (operation == "wait") {
        driver.wait(function(){
            try {
                // wait until the button view cart is displayed
                driver.findElement(By.className(locator)).isDisplayed().then(function(disp){
                    displayed = disp;
                });
            } catch (e) {
                if(e instanceof StaleElementReferenceException) {
                    console.log(chalk.bold.green("Trying again..."));
                }
            }
            return displayed;
        }, 60000);
    } else {
        // do nothing
    }

};
