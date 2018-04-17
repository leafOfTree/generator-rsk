'use strict';

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments);

        this.argument('name', {
            desc: 'component name',
            type: String, 
            required: true, 
        })

        this.name = arguments[0][0];
    },

    writing: function () {
        var path = 'src/components/' + this.name;
        this.mkdir(path);

        this.template('_index.css', path + '/' + this.name + '.css');
        this.template('_index.js', path + '/' + this.name + '.js');
        this.template('_package.json', path + '/package.json');
    }
});
