(function () {
    var marvin-js = require("marvin-js")
      , session = marvin-js.session
      , driver = session.getDriver()
      , webdriver = session.getWebDriver()
      , By = webdriver.By
      , config = marvin-js.config
      , chalk = require("chalk");

    // returns a webdriver.promise that is resolved when the url changes.
    // if an url is passed as parameter it will be considered as the current url,
    // otherwise the current url is computed on the fly
    function hasUrlChanged(currentUrl) {

        console.log(chalk.yellow("Wait that url changes..."));

        var deferred = new webdriver.promise.Deferred();
        var hasCompleted = false;

        function setCheck(url) {
            var timer = setInterval(function () {
                driver.getCurrentUrl().then(function (newUrl) {
                    if (url !== newUrl && !hasCompleted) {
                        hasCompleted = true;
                        clearInterval(timer);
                        deferred.fulfill(url);
                    }
                });
            }, 500);
        }

        if (currentUrl) {
            setCheck(currentUrl);
        }
        else {
            driver.getCurrentUrl().then(function (url) {
                setCheck(url);
            });
        }

        return deferred;
    }


    // Usage:
    // var find = require('../utils/findElement');
    // find("body#notexists", 1000).then(function(el) {
    //    console.log(chalk.green(el ? "exists" : "not exists"));
    // });
    // Select an element from the DOM,
    // waiting a custom timeout
    function findElement(selector, time) {

        // short timeout
        driver.manage().timeouts().implicitlyWait(time || 3000);

        return driver.findElement(By.css(selector)).then(function (el) {
            // restore original timeout
            driver.manage().timeouts().implicitlyWait(config.elementTimeout || 3000);
            return el;
        }, function () {
            // restore original timeout
            driver.manage().timeouts().implicitlyWait(config.elementTimeout || 3000);
            return null;
        });
    };


    function disableTransition() {

        var commands = [
            "console.log('%cCleaning CSS', 'background: green; color: white;');",
            "if (!document.getElementById('resetCss')) {",
            "var style = document.createElement('style');",
            "style.id = 'resetCss';",
            "style.type = 'text/css';",
            "style.innerHTML = '",
            "* { color: red !important; -webkit-transition: none !important; transition: none !important; } ",
            ".loadingAnimation { display: none !important; z-index: -1 !important; }",
            "';",
            "document.querySelector('.desktop head').appendChild(style);",
            "}"
        ].join("");

        return driver.executeScript(commands);
    }

    // Use this to navigate to a specified url and automatically reset css to prevent improper test failure
    // params = {
    //     baseUrl : 'http://www.thecorner.com',
    //     isoCode : 'it',
    //     route : ['Account', 'Overview']
    // }
    function navigateTo(params) {
        // Build url
        var url = params.baseUrl || moonraker.config.baseUrl;

        if (params.isoCode) {
            url += "/" + params.isoCode;
        }
        if (params.route) {
            url += '/' + params.route.join('/');
        }

        // Navigate & reset css
        return driver.get(url).then(function () {
            disableTransition();
        });
    }


    function hasClass(elm, className) {
        return elm.getAttribute('class').then(function (classNames) {
            var isClassNameFound = new RegExp('\\b' + className + '\\b').test(classNames);
            return isClassNameFound;
        });
    }

    function eq(a, b) {
        var delta = Math.abs(a - b);
        if(delta <= 1)
            return true;

        return false;
    }

    module.exports = {
        hasUrlChanged: hasUrlChanged,
        findElement: findElement,
        disableTransition: disableTransition,
        navigateTo: navigateTo,
        hasClass: hasClass,
        priceEqual: eq
    };

})();

/*

 MUTATION OBSERVERS EXAMPLE

 myDom = document.querySelector('.sectionRecap .price');

 mutationObs = new MutationObserver(function(elms) { // CALLED WHEN ANY MUTATION EVENTS TRIGGERED
 console.log('CALLED MUTATION OBSERVERS');
 console.log(elms);
 });

 mutationObs.observe(myDom, { // SET THE OBSERVER TIED TO myDom
 childList : true,
 attributes : true,
 characterData : true
 });

 // SEE DOCUMENTATION AT https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver#MutationObserverInit

 */
