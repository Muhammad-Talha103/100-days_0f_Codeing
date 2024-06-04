// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        var _this = this;
        console.log("Hello, my name is ".concat(this.name, "."));
        var greetInNestedFunction = function () {
            console.log("Hello, my name is ".concat(_this.name, "."));
        };
        greetInNestedFunction();
    };
    return Person;
}());
var person = new Person("Muhammad Talha");
person.greet();
