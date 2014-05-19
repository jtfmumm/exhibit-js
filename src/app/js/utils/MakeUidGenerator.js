define(function(require) {
    function makeUidGenerator(seed) {
        var seed = seed || 0;

        return function() {
            return ++seed;
        };
    }

    return makeUidGenerator
});