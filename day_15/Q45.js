function make_car(manufacture, model) {
    var otherfeatures = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        otherfeatures[_i - 2] = arguments[_i];
    }
    var car = { manufacture: manufacture, model: model };
    otherfeatures.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return (car[key] = value);
    });
    return car;
}
console.log(make_car("Toyota", "grande", ["sunroof", true], ["max_speed", 240], ["colour", "white"]));
