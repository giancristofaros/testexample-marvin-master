
var session = require('marvin-js').session;

module.exports = function() {

    var commands = [
        "yTos.DEBUG = true;",
        "console.log('' + yTos.DEBUG);",
        "$Y.watch({",
        "'yTos::Cart::ShowMiniCart': function (ev) { console.log('MiniCart is Shown'); },",
        "'yTos::Cart::MiniCartVisible': function (ev) { console.log('MiniCart is Visible'); }",
        //"'yTos::Cart::MiniCartMouseEnter': function (ev) { console.log('MiniCart Mouse Enter'); },",
        //"'yTos::Cart::MiniCartMouseLeave': function (ev) { console.log('MiniCart Mouse Leave'); }",
        "});"
    ].join("");

    var driver = session.getDriver();
    driver.executeScript(commands);

};
