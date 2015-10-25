
var session = require('marvin-js').session;
var chalk = require('chalk');
var assert = require('chai').assert;

var homePage = require('../pages/home-page');

exports.define = function (steps) {

	/**
	 * @name "The home page is loaded" - HOMEPAGE
	 * @type Assertion
	 * @description Should be used to check that home page is not in error
	 */
    steps.and(/The home page is loaded/, function () {

        homePage.element("#info404, #info500").and(function() {
	        assert(false, "Home page was not reachable");
        }, function() {
	        assert(true);
        });

    });

};
