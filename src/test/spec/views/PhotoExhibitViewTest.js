define(function(require) {
    require("jasmine-jquery");
    require("jasmine-fixture");
    var Photo = require("js/models/Photo");
    var PhotoExhibit = require("js/models/PhotoExhibit");
    var PhotoView = require("js/views/PhotoView");    
    var PhotoExhibitView = require("js/views/PhotoExhibitView");    

    var $photoHanger = null;

    beforeEach(function() {
        $photoHanger = affix("#hanger");
    });

    describe("PhotoExhibitView", function() {
        it("should exist", function() {
            var photoExhibitView = new PhotoExhibitView();
            expect(photoExhibitView).not.toBeUndefined();
        }); 

        it("should show up when rendered", function() {
            whenIRenderWithAPhoto();
            expect($photoHanger.find('.photo-exhibit')).not.toBeUndefined();
        });

        it("should display a photo when one is included", function() {
            whenIRenderWithAPhoto();
            expect($photoHanger.find('.img')).not.toBeUndefined();
        });
    })

    function whenIRenderWithAPhoto() {
        var photo = new Photo({"img": "01.jpg"});
        var photoEx = new PhotoExhibit({photos: [photo]});
        var photoExhibitView = new PhotoExhibitView({
            model: photoEx
        });
        $photoHanger.append(photoExhibitView.render().el);
    }


})