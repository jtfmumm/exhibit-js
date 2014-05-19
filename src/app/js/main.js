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

require(["js/views/PhotoView", "js/views/PhotoExhibitView", "js/models/Photo", "js/models/PhotoExhibit"], 
        function (PhotoView, PhotoExhibitView, Photo, PhotoExhibit) {
            var photo1 = new Photo({"title": "01", "img": "01.jpg"});
            var photo2 = new Photo({"title": "02", "img": "02.jpg"});
            var photo3 = new Photo({"title": "03", "img": "03.jpg"});
            var photo4 = new Photo({"title": "04", "img": "04.gif"});

            var photoEx = new PhotoExhibit({photos: [photo1, photo2, photo3, photo4]});
            var photoExhibitView = new PhotoExhibitView({
                model: photoEx
            });

            $('body').append(photoExhibitView.render().el);
});