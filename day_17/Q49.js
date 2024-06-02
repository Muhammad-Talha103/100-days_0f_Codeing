function Hobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobbies) {
        console.log("I enjoy ".concat(hobbies, " "));
    });
}
Hobbies("Cricket", "Football", "Cycling");
