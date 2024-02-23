"use strict";
/* No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
Object.defineProperty(exports, "__esModule", { value: true });
//let usernames: string[]=["admin","Ahzam","Rubaisha","Areesha","Sarib"];
var usernames = [];
if (usernames.length == 0) {
    console.log("We need more users!");
}
;
usernames.forEach(function (usernames) {
    if (usernames == "admin") {
        console.log("Hello ad,in, Would you like to see a status report?");
    }
    else {
        console.log("Hello", usernames, ", thank you for logging in again.");
    }
    ;
});
