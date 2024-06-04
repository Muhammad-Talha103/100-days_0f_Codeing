// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.

export class MyClass {
    name: string
    age: number
    
    constructor(name: string , age: number) {
        this.name = name
        this.age = age
    }
    greet() {
        return(`Hello My Name is ${this.name} & My Age is ${this.age}`);
    }
}
