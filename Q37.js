"use strict";
/* Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The size of your shirt is:", size, "& the messsage that will be printed on it is:", message, ".");
}
console.log(make_shirt());
console.log(make_shirt("medium"));
console.log(make_shirt("XL", "My name is Ahzam"));
