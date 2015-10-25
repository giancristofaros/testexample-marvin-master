
var session = require('marvin-js').session;

module.exports = function() {

    var commands = [
        "console.log('%cCleaning CSS', 'background: green; color: white;');",
        "var style = document.createElement('style');",
        "style.type = 'text/css';",
        "style.innerHTML = '",
        "* { color: red !important; -webkit-transition: none !important; transition: none !important; } ",
        ".loadingAnimation { display: none !important; z-index: -1 !important; }",
        "';",
        "document.querySelector('.desktop head').appendChild(style);"
    ].join("");

    var driver = session.getDriver();
    driver.executeScript(commands);

};
