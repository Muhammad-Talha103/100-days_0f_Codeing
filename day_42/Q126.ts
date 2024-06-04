// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.

class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
        const greetInNestedFunction = () => {
            console.log(`Hello, my name is ${this.name}.`);
        };
        greetInNestedFunction();
    }
}

const person = new Person("Muhammad Talha");

person.greet();
