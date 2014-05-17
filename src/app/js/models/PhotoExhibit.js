define(function(require) {
    var Backbone = require('backbone');
    require('backbone-relational');
    var PhotoCollection = require("js/collections/PhotoCollection"); 

    var PhotoExhibit = Backbone.RelationalModel.extend({
    	relations: [{
    		type: 'HasMany',
    		key: 'photos',
    		relatedModel: 'Photo',
    		reverseRelation: {
    			key: 'exhibit'
    		}
    	}],
    });

    return PhotoExhibit;
});