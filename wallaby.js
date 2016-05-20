module.exports = function (wallaby) {
    return {
        files: [
            'src/**/*.js'
        ],

        tests: [
            'test/**/*Spec.js'
        ],
        bootstrap: function () {
            global.expect = require('chai').expect;
        },
        compilers: {
            '**/*.js': wallaby.compilers.babel()
        },
        setup: function () {
            require("babel-polyfill");
        },
        env: {
            type: 'node',
            runner: 'node'
        },
        debug: true
    };
};
