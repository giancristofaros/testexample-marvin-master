var session = require('marvin-js').session;
var Page = require('marvin-js').Page;

module.exports = new Page({

    url: { value: '/' },

    onLoad: { 
        value: function() { session.saveScreenshot("homepage"); } 
    },

    viewAll: {
        get: function () {
            return this.element('#view-all > a');
        }
    },

    postsList: {
        get: function () {
            return this.elements('.post-list > li.post-entry');
        }
    },

    firstPost: {
        get: function () {
            return this.element('.post-list > .post-entry:nth-child(45) a');
        }
    },

    viewMore:{
        get: function () {
            return this.element('.latest-post a.post-link');
        }
    },

    postTitle: {
        get: function () {
            return this.element('header.post-header .post-title');
        }
    }

});