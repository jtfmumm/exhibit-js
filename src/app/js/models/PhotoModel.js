define(['backbone'], function(Backbone) {
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
        }
    });

    return PhotoModel;
});