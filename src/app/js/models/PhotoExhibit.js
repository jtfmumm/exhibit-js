define(function(require) {
    var Backbone = require('backbone');
    require('backbone-relational');
    var Photo = require("js/models/Photo"); 
    var PhotoCollection = require("js/collections/PhotoCollection"); 
    var makeUidGenerator = require('js/utils/makeUidGenerator');

    var photoExhibitUid = makeUidGenerator();

    var PhotoExhibit = Backbone.RelationalModel.extend({
    	relations: [{
    		type: 'HasMany',
    		key: 'photos',
    		relatedModel: 'Photo',
    		collectionType: 'PhotoCollection',
    		reverseRelation: {
    			key: 'exhibit'
    		}
    	}],

    	initialize: function(options) {
            if (options.title == null) this.set("title", photoExhibitUid());
        }
    });

    return PhotoExhibit;
});