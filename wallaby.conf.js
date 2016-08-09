module.exports = function(wallaby) {

    return {
        files: [
            {pattern: './**/*.js'}
        ],
        tests: [
            {pattern: './test/*.js'}
        ],
        setup: function() { window.__moduleBundler.loadTests(); }
    };
}
