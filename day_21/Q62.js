// Q62 - Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.
var Student = /** @class */ (function () {
    function Student(name, age, classes) {
        this.name = name;
        this.age = age;
        this.classes = classes;
    }
    return Student;
}());
var student = new Student("Muhammad Talha", 20, ["9", "10", "11", "12"]);
console.log("Hello ".concat(student.name, " your age is ").concat(student.age, " and your classes are ").concat(student.classes));
