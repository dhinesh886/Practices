var Counter = (function () {
    function Counter() {
        this._count = 0;
    }
    Counter.prototype.increment = function () {
        this._count++;
    };
    Counter.prototype.decrement = function () {
        this._count--;
    };
    Object.defineProperty(Counter.prototype, "value", {
        get: function () {
            return this._count;
        },
        enumerable: true,
        configurable: true
    });
    return Counter;
}());
describe('Counter', function () {
    var counter;
    beforeEach(function () {
        counter = new Counter();
    });
    it('should increase value of counter when incremented', function () {
        expect(counter.value).toEqual(0);
        counter.increment();
        expect(counter.value).toEqual(1);
    });
    it('should decrease value of counter when decremented', function () {
        expect(counter.value).toEqual(0);
        counter.decrement();
        expect(counter.value).toEqual(-1);
    });
});
//# sourceMappingURL=counter.spec.js.map