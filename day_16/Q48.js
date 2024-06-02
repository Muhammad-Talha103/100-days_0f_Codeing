var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var price1 = [1000, 1500, 2000, 2500];
var price2 = [3000, 3500, 4000, 5000];
var combine = __spreadArray(__spreadArray([], price1, true), price2, true).sort(function (a, b) { return a - b; });
console.log(combine);
