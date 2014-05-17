define(function(require) {
    var Photo = require("js/models/Photo"); 
    var PhotoCollection = require("js/collections/PhotoCollection"); 
    var ImgURLPrefix = "static/img/";

    beforeEach(function() {
    });

    describe('PhotoCollection', function () {
        it('should exist', function() {
            expect(PhotoCollection).not.toBeUndefined();
        });
    });

    describe('A photo collection', function() {
        it('should have photo models', function() {
            var photo1 = new Photo({"title": "Untitled"});
            var photo2 = new Photo({"title": "New"});
            var photoCollection = new PhotoCollection([photo1, photo2]);
            expect(photoCollection.models).not.toBeUndefined();
        });
    });
});