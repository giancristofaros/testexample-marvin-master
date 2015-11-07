exports = module.exports = function disableTransition() {

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

    var session = require('marvin-js').session;

    return session.getDriver().executeScript(commands);
}
