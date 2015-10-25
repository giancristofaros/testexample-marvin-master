
//var chalk = require("chalk");


var session = require('marvin-js').session;
var Page = require('marvin-js').Page;
// import header component
var topbarComponent = require('../components/topbar');
var loginRegistrationLayerComponent = require('../components/loginRegistrationLayer');

// import sidebar component 
// TODO
// import footer component
// TODO
module.exports = new Page({

    url: {value: '/it'},

    //newsletter: { get: function () { return this.element("#leadGen"); }},

    //btnCloseNewsletter: { get: function () { return this.element(".closeLead"); }},
  
    topbar: { get: function () { return this.component(topbarComponent, '.topBar'); }},
    
    loginRegistrationLayer: { get: function () { return this.component(loginRegistrationLayerComponent, 'div#topLayerLayoutContainer'); }},

    //cookiePolicy: { get: function () { return this.element('[data-ytos-ctrl="help.cookieLaw"]'); }},

    //btnCloseCookiePolicy: { get: function () { return this.element('[data-ytos-ctrl="help.cookieLaw"] .cookieLawWrapper button'); }},

    //loginRegisterLayerBtn: { get: function () { return this.element('[data-layer="account"] [data-    container="#topLayerLayoutContainer"]'); }},

});
