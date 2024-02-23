"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
Object.defineProperty(exports, "__esModule", { value: true });
var x = 5;
var y = "yes";
console.log("Is y==yes ? I predict true.");
console.log(y == "yes");
console.log("Is x!=5 ? I predict false.");
console.log(y != 'yes');
console.log("Is y lowercase? I predict true.");
console.log(y == y.toLowerCase());
console.log("Is y upper case? I predict false.");
console.log(y == y.toUpperCase());
console.log("Is x==5? I predict true, Is x!=6? I predict true, Is x > 3? I predict true, Is x<6? I predict true, Is x>=4? I predict true, Is x<=5? I predict true.");
console.log(x == 5, x != 6, x > 3, x < 6, x >= 4, x <= 5);
console.log("Is x > 3 & x < 6? I predict true.");
console.log((x > 3) && (x < 6));
console.log("Is x > 3 OR x < 2? I predict true.");
console.log((x > 3) || (x < 2));
console.log("Is x is in array? I predict false");
console.log(typeof (x) == "list");
console.log("Is x is not in array? I predict true");
console.log(typeof (x) != "list");
