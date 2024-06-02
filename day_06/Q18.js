var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var world = ["England", "South Africa", "Pakistan", "Iran", "China"];
console.log("Original order :", world);
console.log("Alphabatical order :", __spreadArray([], world, true).sort());
console.log("Original order :", world);
console.log("Reverse alphabetical order :", world.sort().reverse());
console.log("Original order :", world);
world.reverse();
console.log("Reverse order :", world);
world.reverse();
console.log("Original order :", world);
world.sort();
console.log("Alphabetical order :", world);
world.reverse();
console.log("Reverse alphabetical order :", world);
