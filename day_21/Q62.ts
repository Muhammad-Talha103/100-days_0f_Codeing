
// Q62 - Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

class Student{
    name:string;
    age:number;
    classes:string[];

    constructor(name:string,age:number,classes:string[]){
        this.name=name;
        this.age=age;
        this.classes=classes;
    }
}

let student:Student=new Student("Muhammad Talha",20,["9","10","11","12"]);

console.log(`Hello ${student.name} your age is ${student.age} and your classes are ${student.classes}`);



