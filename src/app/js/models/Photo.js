define(['backbone'], function(Backbone) {
    var imgURLPrefix = "static/img/";

    function makeUidGenerator(seed) {
        var seed = seed || 0;

        return function() {
            return ++seed;
        };
    }

    var photoUid = makeUidGenerator();

    var PhotoModel = Backbone.Model.extend({
        initialize: function(options) {
            if (options.title == null) this.set("title", photoUid());
            if (options.img) {                  
                var imgURL = imgURLPrefix + this.get("img");
                this.set("img", imgURL);
            } 
        }
    });

    return PhotoModel;
});