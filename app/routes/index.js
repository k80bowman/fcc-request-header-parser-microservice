'use strict';

var controllers = require(process.cwd() + '/app/controllers');

module.exports = function (app) {
    app.get('/', controllers.header);
};
