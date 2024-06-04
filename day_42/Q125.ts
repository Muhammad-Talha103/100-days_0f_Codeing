// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.

let person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return` ${this.firstName} ${ this.lastName}`;
    }
};

console.log(person.fullName()); //  "John" "Doe"
