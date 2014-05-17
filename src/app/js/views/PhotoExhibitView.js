define(function(require) {
    var Mustache = require("mustache");
    var PhotoView = require("js/views/PhotoView");
    var photoExhibitTemplate = require("text!static/templates/photo-exhibit-template.html");

    var PhotoExhibitView = Backbone.View.extend({
        initialize: function() {
            this.template = photoExhibitTemplate;
        },
        render: function() {
            var view = this;

            var rendered = Mustache.to_html(view.template, view.model.toJSON());
            view.$el.html(rendered);
            return view;
        }
    });

    return PhotoExhibitView;
})