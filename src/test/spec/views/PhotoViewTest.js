define(function(require) {
    require("jasmine-jquery");
    require("jasmine-fixture");
    var Photo = require("js/models/Photo");
    var PhotoView = require("js/views/PhotoView");    

    var $photoHanger = null;

    beforeEach(function() {
        $photoHanger = affix("#hanger");
    });

    describe("PhotoView", function() {
        it("should exist", function() {
            var photoView = new PhotoView();
            expect(photoView).not.toBeUndefined();
        }); 

        it("should show up when rendered", function() {
            whenIRenderWithAPhoto();
            expect($photoHanger.find('.photo')).not.toBeUndefined();
        });

        it("should display a photo when one is included", function() {
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