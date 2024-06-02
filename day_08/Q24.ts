
let FirstName = "Muhammad"
let LastName = "Talha"

//  # True result
let result1 = (FirstName == "Muhammad");
console.log(result1); //true

// # False result
let result2 = (LastName !==  FirstName);
console.log(result2); //true

// 2: Tests using the lower case function

let FullName = "Muhammad Talha"
let lowercased = FullName.toLowerCase() 

//# True result
let result3 = (lowercased == "muhammad talha");
console.log(result3); //true


//# False result
let result4 = (FullName.toLowerCase() == "junaid");
console.log(result4); //false

//• 3: Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let num1 = 33
let num2 = 17

//# Equality
let result5 = (num1 == num2);

//# Inequality
let result6 = (num1 != num2);

//# Greater than
let result7 = (num2 > num1);

//# Less than
let result8 = (num1 < num2);

//# Greater than or equal to
let result9 = (num2 >= num1);

//# Less than or equal to
let result10 = (num1 <= num2);

//• 4: Tests using "and" and "or" operators

let a = 15;
let b = 30;
let c = 45;

let result11 = (a < b && c > b); // true , both
console.log(result11); //true

let result12 = (a < b || c > b); // true , atleast 1
console.log(result12); //true

let result13 = (a > b && c > b); // false ,both
console.log(result13);//false

let result14 = (c > b || b > a) // false ,both
console.log(result14);//false

// • 5: Test whether an item is in a array

let Numbers = [1,2,3,4,5,6,7,8,9,10];

let result15 = (Numbers.includes(3));
console.log(result15); // true

let result16 = (Numbers.includes(15));
console.log(result16); // false'

//• 6: Test whether an item is not in a array

let result17 = (!Numbers.includes(17));
console.log(result17); //true

let result18 = (!Numbers.includes(6))
console.log(result18); //false
