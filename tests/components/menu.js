var chalk = require("chalk")
  , Component = require('marvin-js').Component
  , session = require('marvin-js').session
  , utils = require('../utils/utils');

module.exports = new Component({

    // the button that allows to open the menu
    menuBtn: {
        get: function () {
            return this.element('[data-target="mainmenu"]');
        }
    },

    // the menu container
    menuBox: {
        get: function () {
            return this.element('#mainmenu');
        }
    },

    // the first link, of the first first-level menu item
    firstLevelLink: {
        get: function () {
            return this.element('((//div[@data-level="1"])[4]//a)[1]', 'xpath');
        }
    },

    // the first link, of the first second-level menu item
    secondLevelLink: {
        get: function () {
            return this.element('((//div[@data-level="2"])[1]//a)[1]', 'xpath');
        }
    },


    /*
     * Used to trigger a click on "menuBtn", in order to open the menu
     * */
    show: {
        value: function () {
            return this.menuBtn.click();
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
     * */
    clickFirstLevelLink: {
        value: function () {
            this.show();
            return this.firstLevelLink.click();
        }
    },

    /*
     * Used to open the menu, and then click on "secondLevelLink"
     * */
    clickSecondLevelLink: {
        value: function () {
            this.show();
            return this.secondLevelLink.click();
        }
    },

    getDepartment: {
        value: function (dept, gender) {
            gender = (gender || 'D').toUpperCase();
            dept = dept || 'emporio';

            return this.element('//*[@data-target-code="' + dept + '" and @data-target-gender="' + gender + '"]/a', 'xpath');
        }
    },

    clickDepartment: {
        value: function (dept, gender) {
            return this.getDepartment(dept, gender).click();
        }
    },

    selectDefaultDepartment: {
        value: function (dept, gender) {
            return session.getDriver().actions()
                .click(this.menuBtn)
                .click(this.getDepartment(dept, gender))
                .perform();
        }
    },

    selectDefaultMacroCategory: {
        value: function () {
            utils.disableTransition().then(function () {
                return session.getDriver().actions()
                    .click(this.menuBtn)
                    .click(this.getDepartment('cappotti'))
                    .perform();
            }.bind(this));
        }
    }

});
