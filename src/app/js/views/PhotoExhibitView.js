define(function(require) {
    var $ = require('jquery');
    var Mustache = require("mustache");
    var PhotoView = require("js/views/PhotoView");
    var photoExhibitTemplate = require("text!static/templates/photo-exhibit-template.html");
    var CurrentItemPointer = require("js/utils/CurrentItemPointer");

    var PhotoExhibitView = Backbone.View.extend({
        initialize: function() {
            this.template = photoExhibitTemplate; 
            this.coll = (this.model) ? this.model.get('photos') : [];
            this.currentItemPointer = new CurrentItemPointer(this.coll);
        },

        events: {
            "click .button.next": "nextPhoto",
            "click .button.previous": "previousPhoto"
        },

        render: function() {
            var view = this;

            var rendered = Mustache.to_html(view.template, view.model.toJSON());
            view.$el.html(rendered);

            this.photoView = new PhotoView({model: this.model.get('photos')[this.currentItemPointer.current()]});
            view.$el.append(this.photoView.render().el);
            return view;
        },

        nextPhoto: function() {
            this.currentItemPointer.next();
            this.photoView = new PhotoView({model: this.model.get('photos')[this.currentItemPointer.current()]});
            $('.photo').replaceWith(this.photoView.render().el);
        },

        previousPhoto: function() {
            this.currentItemPointer.previous();
            this.photoView = new PhotoView({model: this.model.get('photos')[this.currentItemPointer.current()]});
            $('.photo').replaceWith(this.photoView.render().el);
        }
    });

    return PhotoExhibitView;
})