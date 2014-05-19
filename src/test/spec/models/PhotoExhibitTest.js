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

    describe('A photo exhibit', function() {
        it('should have a title', function() {
            var photoEx = new PhotoExhibit({"title": "Untitled"});
            expect(photoEx.get('title')).toBe('Untitled');
        });

        it('should get a default number if no title is supplied', function() {
            var notitle = new PhotoExhibit({});

            expect(typeof notitle.get('title')).toBe('number');
        });

        it('should get a different default number every time', function() {
            var photoEx1 = new PhotoExhibit({});
            var photoEx2 = new PhotoExhibit({});

            expect(photoEx1.get('title')).not.toEqual(photoEx2.get('title'));
        });

        it('should be able to contain photos', function() {
            var photo = new Photo({});
            var photoEx = new PhotoExhibit({ photos: [photo]});
            expect((photoEx).get('photos')[0].get('title')).toBe(photo.get('title'));
        });
    });
});