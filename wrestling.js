"use strict";

var Promise = require('promise');
var _ = require('lodash');


function getScore(product) {
    return product + Math.random() * 10;
}

module.exports = {
    runMatch: function(xProduct, yProduct) {
        console.log("running match");
        return new Promise(function(resolve) {
            console.log(xProduct, yProduct);
            var xKarma = getScore(xProduct);
            var yKarma = getScore(yProduct);
        
            resolve(xKarma > yKarma ? "vs code" : "webstorm");
        });
    }
};