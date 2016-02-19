'use strict';

var controllers = require(process.cwd() + '/app/controllers');

module.exports = function (app) {
    app.route('/')
        .get('/:query', controllers.header);
};
