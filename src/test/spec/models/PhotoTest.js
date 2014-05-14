define(function(require) {
    var PhotoModel = require("app/js/models/Photo"); 
    var ImgURLPrefix = 'app/static/img/';

    beforeEach(function() {
    });

    describe('PhotoModel', function () {
        it('should exist', function() {
            expect(PhotoModel).not.toBeUndefined();
        });
    });

    describe('A photo model', function() {
        it('should be have getters and setters', function() {
            var photo = new PhotoModel({"title": "Untitled"});
            expect(photo.get).not.toBeUndefined();
            expect(photo.set).not.toBeUndefined();
        });

        it('should have a title', function() {
            var photo = new PhotoModel({"title": "Untitled"});
            expect(photo.get('title')).toBe('Untitled');
        });

        it('should get a default number if no title is supplied', function() {
            var notitle = new PhotoModel({});

            expect(typeof notitle.get('title')).toBe('number');
        });

        it('should get a different default number every time', function() {
            var photo1 = new PhotoModel({});
            var photo2 = new PhotoModel({});

            expect(photo1.get('title')).not.toEqual(photo2.get('title'));
        });

        it('should have a url added to its title', function() {
            var imgName = "01.jpg";
            var photo = new PhotoModel({"title": "Untitled", "img": imgName});
            expect(photo.get("img")).toBe(ImgURLPrefix + imgName);
        });
    });
});