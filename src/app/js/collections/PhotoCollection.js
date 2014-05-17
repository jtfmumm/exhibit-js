define(function(require) {
    var Backbone = require('backbone');
    var Photo = require("js/models/Photo");

    var PhotoCollection = Backbone.Collection.extend({
        model: Photo
    });

    return PhotoCollection;
});