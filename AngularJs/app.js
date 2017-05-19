// define and register module
var app = angular.module("myApp", ['ngRoute', 'homeModule']);

// define and regster filter
app.filter("zigzag", function () {
    return function (x) {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            c = x[i];
            if (i % 2 == 0) {
                c = c.toUpperCase();
            }
            txt += c;
        }
        return txt;
    };
});