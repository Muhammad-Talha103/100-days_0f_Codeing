// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.
var person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return " ".concat(this.firstName, " ").concat(this.lastName);
    }
};
console.log(person.fullName()); //  "John" "Doe"
