require.config({
    baseUrl: "",
    paths: {
        jquery: "js/lib/jquery-2.1.1", 
        underscore: "js/lib/underscore", 
        backbone: "js/lib/backbone",
        mustache: "js/lib/mustache",
        jasmine: "js/lib/jasmine",
        text: "js/lib/text"
    }
});

require(["js/views/PhotoView", "js/models/Photo"], function (PhotoView, Photo) {
    var photo = new Photo({"title": "thisPhoto", "img": "01.jpg"});
    var photoView = new PhotoView({
        model: photo
    });

    photoView.render();
});