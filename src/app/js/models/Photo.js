define(function(require) {
    var Backbone = require('backbone');
    require('backbone-relational');
    var makeUidGenerator = require('js/utils/makeUidGenerator');

    var imgURLPrefix = "static/img/";

    var photoUid = makeUidGenerator();

    var Photo = Backbone.RelationalModel.extend({
        initialize: function(options) {
            if (options.title == null) this.set("title", photoUid());
            if (options.img) {                  
                var imgURL = imgURLPrefix + this.get("img");
                this.set("img", imgURL);
            } 
        }
    });

    return Photo;
});