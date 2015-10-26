var session = require('marvin-js').session;
var assert = require("chai").assert;
var searchPage = require('../pages/search-page');
var clickOnElement = require('../utils/clickOnElement');

exports.define = function (steps) {

    
    /*
     * @name "" - SEARCHPAGE
     * @type Assertion
     * @description 
     * */ /*
    steps.when(/I see the menu open/, function () {
        
        var driver = session.getDriver();
        driver.sleep(2000);
        
        // check the reister form element is present
        assert(searchPage.menu.menuBox.isDisplayed());
    });*/
    
    
    
    /*
     * @name "I should see at least one item" - SEARCHPAGE
     * @type Assertion
     * @description Should be used when the search page is loaded, to assert that should be at least one item.
     * */
    steps.then(/I should see at least one item in search result page/, function () {
        
        searchPage.waitFor(clickOnElement(searchPage.products));
        
        /*var query = searchPage.products;
        query.then(function (products) {
            expect(products.length).to.be.at.least(1);
        });*/
    });

};