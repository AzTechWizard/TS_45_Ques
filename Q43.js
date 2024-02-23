"use strict";
/* Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
Object.defineProperty(exports, "__esModule", { value: true });
var magician = ["Harry Houdini", "David Blaine", "Dai Vernon"];
var magic = magician.slice();
function make_great(magic) {
    for (var i = 0; i < magic.length; i++) {
        magic[i] = "Great " + magic[i];
    }
}
;
function show_magicians(magic) {
    console.log(magic);
}
;
function show_magicians_new(magician) {
    console.log(magician);
}
;
make_great(magic);
show_magicians(magic);
show_magicians_new(magician);
