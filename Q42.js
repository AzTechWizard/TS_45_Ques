"use strict";
/* Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.*/
Object.defineProperty(exports, "__esModule", { value: true });
var magician = ["Harry Houdini", "David Blaine", "Dai Vernon"];
function make_great() {
    for (var _i = 0, magician_1 = magician; _i < magician_1.length; _i++) {
        var magic = magician_1[_i];
        return "Great" + magic;
    }
}
function show_magicians() {
    console.log(magician);
}
make_great();
show_magicians();
