// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var comment = "I am Muhammad Talha and i live in hyderabad";
//tolowercase
console.log(comment.toLowerCase());
//touppercase
console.log(comment.toUpperCase());
//tittlecase
var titlecase = comment.split(" ");
var titleCase = "";
for (var i = 0; i < titlecase.length; i++) {
    titleCase += titlecase[i].charAt(0).toUpperCase() + titlecase[i].slice(1).toLowerCase() + " ";
}
console.log(titleCase);
