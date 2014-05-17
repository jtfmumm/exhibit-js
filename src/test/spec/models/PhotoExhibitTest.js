define(function(require) {
    var Photo = require("js/models/Photo"); 
    var PhotoExhibit = require("js/models/PhotoExhibit"); 
    var PhotoCollection = require("js/collections/PhotoCollection"); 

    beforeEach(function() {
    });

    describe('PhotoExhibit', function () {
        it('should exist', function() {
            expect(PhotoExhibit).not.toBeUndefined();
        });
    });

    xdescribe('A photo exhibit', function() {
        xit('should be have getters and setters', function() {
            var photo = new Photo({"title": "Untitled"});
            expect(photo.get).not.toBeUndefined();
            expect(photo.set).not.toBeUndefined();
        });

        xit('should have a title', function() {
            var photo = new Photo({"title": "Untitled"});
            expect(photo.get('title')).toBe('Untitled');
        });
    });
});