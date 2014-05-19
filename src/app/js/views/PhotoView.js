define(function(require) {
    var Mustache = require("mustache");
    var Backbone = require("backbone");
    var photoTemplate = require("text!static/templates/photo-template.html");

    var PhotoView = Backbone.View.extend({
        initialize: function() {
            this.template = photoTemplate;
        },

        render: function() {
            var view = this;

            var rendered = Mustache.to_html(view.template, view.model.toJSON());
            view.$el.html(rendered);
            return view;
        }
    });

    return PhotoView;
})