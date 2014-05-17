define(function(require) {
    require("jasmine-jquery");
    require("jasmine-fixture");
    var Photo = require("js/models/Photo");
    var PhotoView = require("js/views/PhotoView");    
    var PhotoExhibitView = require("js/views/PhotoExhibitView");    

    var $photoHanger = null;

    beforeEach(function() {
        $photoHanger = affix("#hanger");
    });

    describe("PhotoViewExhibit", function() {
        it("should exist", function() {
            var photoExhibitView = new PhotoExhibitView();
            expect(photoExhibitView).not.toBeUndefined();
        }); 

        xit("should show up when rendered", function() {
            whenIRenderWithAPhoto();
            expect($photoHanger.find('.photo')).not.toBeUndefined();
        });

        xit("should display a photo when one is included", function() {
            whenIRenderWithAPhoto();
            expect($photoHanger.find('.img')).not.toBeUndefined();
        });
    })

    function whenIRenderWithAPhoto() {
        var photo = new Photo({"img": "01.jpg"});
        var photoView = new PhotoView({model: photo});
        $photoHanger.append(photoView.render().el);
    }


})