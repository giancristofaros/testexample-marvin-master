
var session = require('marvin-js').session;
var chalk = require('chalk');
var assert = require("chai").assert;

var homePage = require('../pages/home-page');

exports.define = function (steps) {

    /**
     * @name "Login layer is loaded" - HOMEPAGE
     * @type Assertion
     * @description Should be used to check that the login layer is visible
     */
    steps.when(/Login layer is loaded/, function () {

        // check the login layer element
        assert(homePage.loginRegistrationLayer.loginForm.isDisplayed());

    });

    /**
     * @name "I logged in" - HOMEPAGE
     * @type Assertion
     * @description Should be used to check that the user is logged in
     */
    steps.then(/I logged in/, function () {

        // check the welcome message
        //assert(homePage.iconLogged.isDisplayed());
		// L'istruzione then viene eseguita dopo che la chiamata alla waitFor è finita.
		homePage.waitFor(function(){
            return homePage.topbar.iconStatusLogged.isDisplayed();
        }, 10000).then(function(){
				assert(homePage.topbar.iconStatusLogged.isDisplayed());
		});
	});

    /**
     * @name "I should see the <$element>" - HOMEPAGE
     * @type Assertion
     * @description Should be used to check that the user is logged in
     */
    steps.then(/I should see the <$element>/, function (element) {

        // check the welcome message
        assert(homePage.element(element).isDisplayed());

    });

};
