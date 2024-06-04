"use strict";
// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
Object.defineProperty(exports, "__esModule", { value: true });
var myclass_1 = require("./myclass");
var person = new myclass_1.MyClass("John", 18);
console.log(person.greet());
