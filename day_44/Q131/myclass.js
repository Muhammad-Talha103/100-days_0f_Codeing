"use strict";
// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyClass = void 0;
var MyClass = /** @class */ (function () {
    function MyClass(name, age) {
        this.name = name;
        this.age = age;
    }
    MyClass.prototype.greet = function () {
        return ("Hello My Name is ".concat(this.name, " & My Age is ").concat(this.age));
    };
    return MyClass;
}());
exports.MyClass = MyClass;
