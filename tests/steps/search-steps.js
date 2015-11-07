var marvin = require("marvin-js");
var session = require('marvin-js').session;
var searchPage = require('../pages/search-page');
var clickOnElement = require('../utils/clickOnElement');

exports.define = function (steps) {

    
     /*
     * @name "I visit the home page in $countryCode" - HOMEPAGE
     * @type Prerequisite
     * @description Open the homepage (url homePage's url property)
     * */
    steps.given(/I visit home in $countryCode/, function (countryCode) {
	
        var url = marvin.config.baseUrl + "/" + countryCode;
		//alert(url);
        session.getDriver().get(url);

        //yTosDebug();

    });
    
    
    
    
    /*
     * @name "I select gender" - SEARCHPAGE
     * @type Step
     * @description 
     * */
    steps.when(/I select gender/, function () {
        searchPage.waitFor(clickOnElement(searchPage.menu.menuBtn));
        console.log(chalk.bold.green("Scrivi '" + searchPage.menu.menuBtn + "'"));
        
        var driver = session.getDriver();
        driver.sleep(8000);
        //searchPage.menu.click();
    });
    
      /*
     * @name "I select category" - SEARCHPAGE
     * @type Step
     * @description 
     * */
    steps.when(/I select the category/, function () {
        
        var driver = session.getDriver();
        driver.sleep(4000);
        searchPage.waitFor(clickOnElement(searchPage.menu.closeMenuBox));
        searchPage.menu.clickFirstLink();
        //searchPage.menu.click();
    });
    
    /**
     * @name "I visit the default search result page" - SEARCHPAGE
     * @type Prerequisite
     * @description Should be used to open the default (see config.json) search result
     */
    /*
    steps.given(/I visit the default search result page/, function () {

        searchPage.visit();

    });*/

    /*
     * @name "I click on the first item" - SEARCHPAGE
     * @type Step
     * @description Should be used in search page to click on the first result.
     * */
    steps.when(/I click on the first item/, function () {
        searchPage.clickOnFirstProduct();
    });

    steps.when(/I select item/, function () {
        searchPage.clickOnFirstProduct();
    });

};