// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.

let students: Map<number, string> = new Map<number, string>();
students.set(1, "John");
students.set(2, "Mary");
students.set(3, "Bob");

students.forEach((name , id) => {
    console.log(`Name : ${name} , Student Id : ${id} `);
});

