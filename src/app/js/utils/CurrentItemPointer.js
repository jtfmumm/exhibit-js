define(function(require) {

    function CurrentItemPointer(collection) {
        this.cur = 0;
        this.end = collection.length - 1;

        this.next = function() {
            if (this.cur < this.end) {
                this.cur++;
            }
        };

        this.previous = function() {
            if (this.cur > 0) {
                this.cur--;
            }
        };

        this.current = function() {
            return this.cur;
        };
    }

    return CurrentItemPointer;
})