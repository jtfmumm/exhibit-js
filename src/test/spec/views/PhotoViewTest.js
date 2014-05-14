define(function(require) {
    var Photo = require("app/js/models/Photo");
    var PhotoView = require("app/js/views/PhotoView");

    describe("PhotoView", function() {
        it("should exist", function() {
            var photoView = new PhotoView();
            expect(photoView).not.toBeUndefined();
        }); 
    })


})