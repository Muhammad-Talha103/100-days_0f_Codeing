var FirstName = "Muhammad";
var LastName = "Talha";
//  # True result
var result1 = (FirstName == "Muhammad");
console.log(result1); //true
// # False result
var result2 = (LastName !== FirstName);
console.log(result2); //true
// 2: Tests using the lower case function
var FullName = "Muhammad Talha";
var lowercased = FullName.toLowerCase();
//# True result
var result3 = (lowercased == "muhammad talha");
console.log(result3); //true
//# False result
var result4 = (FullName.toLowerCase() == "junaid");
console.log(result4); //false
//• 3: Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 33;
var num2 = 17;
//# Equality
var result5 = (num1 == num2);
//# Inequality
var result6 = (num1 != num2);
//# Greater than
var result7 = (num2 > num1);
//# Less than
var result8 = (num1 < num2);
//# Greater than or equal to
var result9 = (num2 >= num1);
//# Less than or equal to
var result10 = (num1 <= num2);
//• 4: Tests using "and" and "or" operators
var a = 15;
var b = 30;
var c = 45;
var result11 = (a < b && c > b); // true , both
console.log(result11); //true
var result12 = (a < b || c > b); // true , atleast 1
console.log(result12); //true
var result13 = (a > b && c > b); // false ,both
console.log(result13); //false
var result14 = (c > b || b > a); // false ,both
console.log(result14); //false
// • 5: Test whether an item is in a array
var Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result15 = (Numbers.includes(3));
console.log(result15); // true
var result16 = (Numbers.includes(15));
console.log(result16); // false'
//• 6: Test whether an item is not in a array
var result17 = (!Numbers.includes(17));
console.log(result17); //true
var result18 = (!Numbers.includes(6));
console.log(result18); //false
