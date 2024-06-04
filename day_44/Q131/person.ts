// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.

import { MyClass } from "./myclass";

let person = new MyClass("John", 18);
console.log(person.greet());