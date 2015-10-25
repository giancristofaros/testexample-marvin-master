
var session = require('marvin-js').session;
var logger = require('marvin-js').log;

var driver = session.getDriver();

var blogPage = require('../pages/blog');

exports.define = function (steps) {

    steps.then(/The whole archive is loaded/, function () {
        driver.sleep(1000);
        blogPage.postsList.then(function(posts) {
            expect(posts.length).to.be.at.least(10);
        });
    });

    steps.then(/The latest post is loaded/, function () {
        driver.sleep(1000);
        blogPage.postTitle.getText().then(function(title) {
            title.should.be.equal("EcmaScript2015 modules today through jsmp");
        });
    });

    steps.then(/The first post is loaded/, function () {
        driver.sleep(1000);

        logger.dir({ id: 2, name: 'bar', email: 'baz@cuz.biz' }, 'user info');

        blogPage.postTitle.getText().then(function(title) {
            title.should.be.equal("Hello world");
        });
    });

};