
var moonraker = require("marvin-js");
var session = require('marvin-js').session;
//var chalk = require("chalk");
var homePage = require('../pages/home-page');
//var yTosDebug = require('../utils/yTosDebug');

exports.define = function (steps) {

    /*
     * @name "I visit the home page in $countryCode" - HOMEPAGE
     * @type Prerequisite
     * @description Open the homepage (url homePage's url property)
     * */
    steps.given(/I visit the home page in $countryCode/, function (countryCode) {
	
        var url = moonraker.config.baseUrl + "/" + countryCode;
		//alert(url);
        session.getDriver().get(url);

        //yTosDebug();

    });

    /*
     * @name "Newsletter layer is loaded" - HOMEPAGE
     * @type Prerequisite
     * @description Should be used when the homepage is loaded to check if the newsletter layer is opened.
     * 
    steps.given(/Newsletter layer is loaded/, function () {

        homePage.waitFor(function() {
            return homePage.newsletter.isDisplayed();
        }, 10000);

    });
	*/
    /*
     * @name "Cookie Policy layer is loaded" - HOMEPAGE
     * @type Prerequisite
     * @description Should be used when the homepage is loaded to check if the Cookie Policy layer is opened.
     * */
    steps.given(/Cookie Policy layer is loaded/, function () {

        homePage.waitFor(function() {
            return homePage.cookiePolicy.isDisplayed();
        }, 10000);

    });
	
	 /*
     * @name "I close the Cookie Policy layer" - HOMEPAGE
     * @type Step
     * @description Should be used in order to close the Cookie Policy layer.
     * */
    steps.when(/I close the Cookie Policy layer/, function () {

        if (homePage.btnCloseCookiePolicy.isDisplayed()) {
            homePage.btnCloseCookiePolicy.click();
        }

    });
	
    /*
     * @name "I click on menu icon" - HOMEPAGE
     * @type Prerequisite
     * @description Should be used when the homepage is loaded.
     * 
    steps.and(/I click on menu icon/, function () {

        homePage.waitFor(function() {
            return homePage.menuOpenBtn.isDisplayed();
        }, 10000);
		
		homePage.menuOpenBtn.click();

    });*/
	
	/*
     * @name "I should see the menu" - HOMEPAGE
     * @type Prerequisite
     * @description Should be used when the homepage is loaded.
     * */
    steps.then(/I should see the menu/, function () {
		
		homePage.waitFor(function() {
            return homePage.menu.menuOpenBtn.isDisplayed();
        }, 10000);
		
		if (homePage.menu.menuOpenBtn.isDisplayed()) {
            homePage.menu.menuOpenBtn.click();
        }
		
        //homePage.menuOpenBtn.click();
		
		homePage.waitFor(function() {
            return homePage.menu.menuBox.isDisplayed();
        }, 10000);
		
		if (homePage.menu.menuBox.isDisplayed()) {
            console.log("VEDO IL MENU APERTO!!!");
        }

    });
	
	 /*
     * @name "I click on the first link" - HOMEPAGE
     * @type Step
     * @description Should be used in order to close the Cookie Policy layer.
     * */
    steps.when(/I click on the first link/, function () {
		
		
		homePage.waitFor(function() {
            return homePage.menu.menuFirstLink.isDisplayed();
        }, 10000);
		
        if (homePage.menu.menuFirstLink.isDisplayed()) {
            homePage.menu.menuFirstLink.click();
        }

    });



    /*
     * @name "I visit the home page" - HOMEPAGE
     * @type Prerequisite
     * @description Open the homepage (url homePage's url property)
     * 
    steps.given(/I visit the home page/, function () {

        homePage.visit();

    }); */

    ///*
    // * @name "Home is loaded" - HOMEPAGE
    // * @type Step
    // * @description Should be used when the homepage is loaded. Inject css to disable transitons, and loading layer.
    // * */
    //steps.when(/Home is loaded/, function () {
    //
    //    homePage.resetCSS();
    //
    //});

    ///*
    // * @name "SubHome is loaded" - HOMEPAGE
    // * @type Step
    // * @description Should be used when the homepage is loaded. Inject css to disable transitons, and loading layer.
    // * */
    //steps.when(/SubHome is loaded/, function () {
    //
    //    homePage.resetCSS();
    //
    //});

    /*
     * @name "I close the newsletter layer" - HOMEPAGE
     * @type Step
     * @description Should be used in order to close the newsletter layer.
     * 
    steps.when(/I close the newsletter layer/, function () {

        if(homePage.btnCloseNewsletter.isDisplayed()){
            homePage.btnCloseNewsletter.click();
        }
    });
	*/

   

    /*
     * @name "I show the menu" - HOMEPAGE
     * @type Step
     * @description Should be used in order to trigger the opening of the menu
     * 
    steps.when(/I show the menu/, function () {

        homePage.menu.show();

    });*/

    /*
     * @name "I click on the link &lt;$linkId&gt;" - HOMEPAGE
     * @type Step
     * @description Should be used to click a link of the menu with a specific css id. For example: I click on the link 'emporio_donna'.
     * 
    steps.when(/I click on the link <$linkId>/, function (linkId) {

        homePage.menu.clickOn('#'+linkId);

    });*/

    /*
     * @name "I click on the first level link" - HOMEPAGE
     * @type Step
     * @description Should be used to click the first link, of the first first-level menu item. This also trigger the opening of the menu.
     * @todo: open the menu only when it is closed!
     * 
    steps.when(/I click on the first level link/, function () {

        menuPage.clickFirstLevelLink();

    });*/

    /*
     * @name "I click on the second level link" - HOMEPAGE
     * @type Step
     * @description Should be used to click the first link, of the first second-level menu item. This also trigger the opening of the menu.
     * @todo: open the menu only when it is closed!
     * 
    steps.when(/I click on the second level link/, function () {

        homePage.menu.clickSecondLevelLink();

    });*/

};



/*
* Sometimes this will simplify your debug
*
* var driver = session.getDriver();
* driver.sleep(60000);
* */


/*
* How to get current url:
*
* session.getDriver().getCurrentUrl().then(function (url) {
*   console.log(chalk.green(url))
* });
*
* */
