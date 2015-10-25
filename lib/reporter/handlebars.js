
var fs = require('fs');
var path = require('path');
var glob = require('glob');

var Handlebars = require('handlebars');
var i18n = require('./i18n/index.js');

var reporterDir = path.join('node_modules', 'marvin-js', 'lib', 'reporter');
var templatesDir = path.join(reporterDir, 'templates');

Handlebars.registerHelper('ifEqual', function(a, b, options) {
  if(a != b) {
    return options.inverse(this);
  }
  return options.fn(this);
});

Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {

  switch (operator) {
    case '==':
      return (v1 == v2) ? options.fn(this) : options.inverse(this);
    case '===':
      return (v1 === v2) ? options.fn(this) : options.inverse(this);
    case '<':
      return (v1 < v2) ? options.fn(this) : options.inverse(this);
    case '<=':
      return (v1 <= v2) ? options.fn(this) : options.inverse(this);
    case '>':
      return (v1 > v2) ? options.fn(this) : options.inverse(this);
    case '>=':
      return (v1 >= v2) ? options.fn(this) : options.inverse(this);
    case '&&':
      return (v1 && v2) ? options.fn(this) : options.inverse(this);
    case '||':
      return (v1 || v2) ? options.fn(this) : options.inverse(this);
    default:
      return options.inverse(this);
  }
});

Handlebars.registerHelper('i18n', function (str) {
  var args = Array.prototype.slice.apply(arguments);
  var str = args.splice(0, 1);
  var localizedStr = i18n.get(str[0]);
  if (!localizedStr){
    return `*** ${str[0]} ***`;
  }
  if (args.length > 0){
    args.forEach(function(el, i){
      localizedStr = localizedStr.replace("${"+i+"}", el);
    });
  }
  return localizedStr;
});

Handlebars.registerHelper('sprite', function (browserName) {
  if (browserName == "internet explorer"){
    return "ie";
  }
  return browserName;
});

// all the partial templates should be inside the ./partials folder, and their name should start with _.
// registering templates
glob.sync(path.join(templatesDir, 'partials', '*.html')).forEach(function (file) {
  var partial = fs.readFileSync(file);
  var partialName = /(_\w+).html$/g.exec(file)[1];
  Handlebars.registerPartial(partialName, partial.toString());
});

// reexporting Handelbars
exports = module.exports = Handlebars;