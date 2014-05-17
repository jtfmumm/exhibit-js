require.config({
    baseUrl: "",
    paths: {
        jquery: "js/lib/jquery-2.1.1", 
        underscore: "js/lib/underscore", 
        backbone: "js/lib/backbone",
        "backbone-relational": 'js/lib/backbone-relational',
        mustache: "js/lib/mustache",
        text: "js/lib/text"
    },     
    shim: {
        backbone: {
          deps: ['underscore', 'jquery'],
          exports: 'Backbone'
        },
        "backbone-relational": {
            deps: ['backbone'],
            exports: 'Backbone'
        }
    }
});

require(["js/views/PhotoView", "js/models/Photo"], function (PhotoView, Photo) {
    var photo = new Photo({"title": "thisPhoto", "img": "01.jpg"});
    var photoView = new PhotoView({
        model: photo
    });

    $('body').append(photoView.render().el);
});