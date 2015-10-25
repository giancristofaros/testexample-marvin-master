
//var chalk = require("chalk");

var Component = require('marvin-js').Component;

module.exports = new Component({
	
	// the logo element
	logo: { get:function () { return this.element('#logo'); }},
    
    // the customer care link element
	customerCareLink: { get:function () { return this.element('#header_cCare'); }},
    
    // the login layer button element
	loginRegistrationLayerBtn: { get: function () { return this.element('[data-container="#topLayerLayoutContainer"] .navText'); }},
    
    //icon logged status element
    iconStatusLogged: { get: function () { return this.element('[data-layer="account"] .navText .userGenderLabel'); }},
	
	// the search layer button element
	searchLayerIcon: { get:function () { return this.element("#header_search"); }},
	
	//searchLayerClose: { get:function () { return this.element("button.mfp-close"); }},
    
    // the whishlist layer button element
	whishlistLayerIcon: { get:function () { return this.element('#header_wishlist'); }},

	// the minicart layer button element
	miniCartLayerIcon: { get:function () { return this.element('#viewShoppingBag'); }},
    
    //the mainNav menu
    navMenu: {get:function(){return this.element('#mainNav');}},
    
    //the mainNav woman menu
    navMenuWoman: {get:function(){return this.element('#mainNav [data-menutype="woman"]');}},
    
    //the mainNav man menu
    navMenuMan: {get:function(){return this.element('#mainNav [data-menutype="man"]');}},
    
    //the mainNav experience menu
    navMenuExp: {get:function(){return this.element('#mainNav [data-menutype="experience"]');}},
	
	// the button that allows to open the menu
    menuOpenBtn: { get: function () { return this.element(".menuIcon"); }},
	
	// the button that allows to close the menu
	menuCloseBtn: { get: function () { return this.element(".menuIcon open"); }},
	
    // the menu container
    menuBox: { get: function () { return this.element(".menu"); }},
	
	// first link menu 
	menuFirstLink: { get: function () { return this.element("#estore_new_arrivals"); }},

    /*
    * Used to trigger a click on "menuBtn", in order to open the menu
    * */
    show: {
        value: function () {
            return this.menuOpenBtn.click();
        }
    },

    /*
    * Used to trigger a click on a specific selector
    * */
    clickOn: {
        value: function (locator) {
            return this.element(locator).click();
        }
    },

    /*
     * Used to open the menu, and then click on "firstLevelLink"
     * 
    clickFirstLevelLink: {
        value: function () {
            this.show();
            return this.firstLevelLink.click();
        }
    },*/

    /*
     * Used to open the menu, and then click on "secondLevelLink"
     * 
    clickSecondLevelLink: {
        value: function () {
            this.show();
            return this.secondLevelLink.click();
        }
    }*/

});
