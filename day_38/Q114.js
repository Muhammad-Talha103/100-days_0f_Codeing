// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.
var students = new Map();
students.set(1, "John");
students.set(2, "Mary");
students.set(3, "Bob");
students.forEach(function (name, id) {
    console.log("Name : ".concat(name, " , Student Id : ").concat(id, " "));
});
