function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return "Your Order is ".concat(items.join(" , "));
}
console.log(sandwich("burger", "cheez", "bun"));
console.log(sandwich("pizza", "kabab", "tikka"));
console.log(sandwich("Mustard", "mayonnaise "));
