define(function(require) {
    var Backbone = require('backbone');
    var PhotoCollection = require("js/collections/PhotoCollection"); 

    var PhotoExhibit = Backbone.Model.extend({
        initialize: function(options) {
            this.photos = new PhotoCollection(); //Need to improve this              
        }
    });

    return PhotoExhibit;
});