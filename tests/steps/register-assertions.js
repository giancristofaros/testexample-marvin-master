
var session = require('marvin-js').session;
var chalk = require("chalk");
var assert = require("chai").assert;
var clickOnElement = require('../utils/clickOnElement');
var homePage = require('../pages/home-page');

exports.define = function (steps) {
    
     /**
     * @name "Register Form is visible" - HOMEPAGE
     * @type Assertion
     * @description Should be used to check that the login layer is visible
     */
    steps.when(/I see the register button/, function () {

        // check the reister form element is present
        assert(homePage.loginRegistrationLayer.registerBtn.isDisplayed());
        
        var driver = session.getDriver();
        driver.sleep(8000);

    });
    
     /*
     * @name "I click on the login button" - HOMEPAGE
     * @type Step
     * @description Should be used to click on the login button.
     * */
    steps.when(/I press the register btn/, function () {

        var driver = session.getDriver();
        driver.sleep(4000);

        homePage.waitFor(clickOnElement(homePage.loginRegistrationLayer.registerBtn));

    });
    
     /*
     * @name "I fill the input email and confirm email with validate $email" - HOMEPAGE
     * @type Step
     * @description Should be used to click on the login button.
     * */
    steps.when(/I fill the email field with $email/, function (email) {

        //var driver = session.getDriver();
        //driver.sleep(4000);
        email = email || "test.us@yoox.com";
        homePage.loginRegistrationLayer.registerEmailInput.sendKeys(email);
        homePage.loginRegistrationLayer.registerEmailConfirm.sendKeys(email);
    });
    
       /*
     * @name "I fill the input email and confirm email with validate $password" - HOMEPAGE
     * @type Step
     * @description Should be used to click on the login button.
     * */
    steps.when(/I fill the password field with $password/, function (pw) {

        //var driver = session.getDriver();
        //driver.sleep(4000);
        pw = pw || "password";
        homePage.loginRegistrationLayer.registerPassInput.sendKeys(pw);
        homePage.loginRegistrationLayer.registerPassConfirm.sendKeys(pw);
    });
    
      /*
     * @name "I select a regular title"
     * @type Step
     * @description Should be used to click on the login button.
     * */
    steps.when(/I select a regular title/, function () {

        //var driver = session.getDriver();
        //driver.sleep(4000);
        //pw = pw || "password";
        //homePage.loginRegistrationLayer.registerPassInput.sendKeys(pw);
        //homePage.loginRegistrationLayer.registerPassConfirm.sendKeys(pw);
        
        homePage.loginRegistrationLayer.selectGender.click();
    });
    
     /*
     * @name "I fill the input name with validate name"
     * @type Step
     * @description Should be used to click on the login button.
     * */
    steps.when(/I fill the input name with validate name/, function () {

        //var driver = session.getDriver();
        //driver.sleep(4000);
        //pw = pw || "password";
        homePage.loginRegistrationLayer.registerNameInput.sendKeys('Silverio');
        //homePage.loginRegistrationLayer.registerPassConfirm.sendKeys(pw);
        
        //homePage.loginRegistrationLayer.registerNameInput;
    });
    
     /*
     * @name "I fill the input surname with validate surname"
     * @type Step
     * @description Should be used to click on the login button.
     * */
    steps.when(/I fill the input surname with validate surname/, function () {

        homePage.loginRegistrationLayer.registerSurnameInput.sendKeys('Giancristofaro');
    });
    
      /*
     * @name "I select a regular day"
     * @type Step
     * @description Should be used to click on the login button.
     * */
    steps.when(/I select a regular day/, function () {

        var driver = session.getDriver();
        driver.sleep(3000);
        homePage.loginRegistrationLayer.selectDay.click();
    });
    
      /*
     * @name "I select a regular month"
     * @type Step
     * @description Should be used to click on the login button.
     * */
    steps.when(/I select a regular month/, function () {

        var driver = session.getDriver();
        driver.sleep(3000);
        homePage.loginRegistrationLayer.selectMonth.click();
    });
    
    /*
     * @name "I select a regular year"
     * @type Step
     * @description Should be used to click on the login button.
     * */
    steps.when(/I select a regular year/, function () {

        var driver = session.getDriver();
        driver.sleep(3000);
        homePage.loginRegistrationLayer.selectYear.click();
        
    });
    
      /*
     * @name "I select a regular country"
     * @type Step
     * @description Should be used to click on the login button.
     * */
    steps.when(/I select a regular country/, function () {
        
        var driver = session.getDriver();
        driver.sleep(3000);
        homePage.loginRegistrationLayer.selectCountry.click();
    
    });
    
     /*
     * @name "I click on register button"
     * @type Step
     * @description Should be used to click on the login button.
     * */
    steps.when(/I click on register button/, function () {

        var driver = session.getDriver();
        driver.sleep(3000);
        homePage.waitFor(clickOnElement(homePage.loginRegistrationLayer.registerSubmitBtn));
        
    });
    
    /**
     * @name "I see the icon logged status" - HOMEPAGE
     * @type Assertion
     * @description Should be used to check that the user is logged in
     */
    steps.then(/I see the icon logged status/, function () {

        // check the welcome message
        //assert(homePage.iconLogged.isDisplayed());
		// L'istruzione then viene eseguita dopo che la chiamata alla waitFor è finita.
		homePage.waitFor(function(){
            return homePage.topbar.iconStatusLogged.isDisplayed();
        }, 10000).then(function(){
				assert(homePage.topbar.iconStatusLogged.isDisplayed());
		});
	});

};