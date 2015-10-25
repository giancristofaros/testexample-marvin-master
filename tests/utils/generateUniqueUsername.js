
var session = require('marvin-js').session;
var chalk = require("chalk");

module.exports = function() {

    var d = new Date();
    var t = d.getTime();

    var year = d.getUTCFullYear();
    var month = ("0" + (d.getUTCMonth() + 1)).slice(-2); //months from 1-12
    var day = ("0" + d.getUTCDate()).slice(-2);
    var rand = ("" + d.getMilliseconds() + Math.random().toString().slice(2, 11)).slice(0, 6);

    var username = "test." + year + month + day + "." + rand + "@yoox.com";
    console.log(chalk.bold.green("Generated username '" + username + "'"));
    return username;

};
