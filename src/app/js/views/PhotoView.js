define(function(require) {
    var Mustache = require("mustache");
    var Photo = require("js/models/Photo");
    var photoTemplate = require("text!static/templates/photo-template.html");

    var PhotoView = Backbone.View.extend({
        el: $("body"),
        initialize: function() {
            this.template = photoTemplate;
        },
        render: function() {
            var view = this;

            var rendered = Mustache.to_html(view.template, view.model.toJSON());
            view.$el.append(rendered);
            return view;
        }
    });

    return PhotoView;
})