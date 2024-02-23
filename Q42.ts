/* Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified.*/

let magician:string[]=["Harry Houdini","David Blaine","Dai Vernon"];

function make_great(magician:string[]):void {
    for(let i=0; i<magician.length;i++){
        magician[i]="Great"+magician[i];
    }
};
function show_magicians(magician:string[]):void {
    console.log(magician);
};
make_great(magician);
show_magicians(magician);
export{}
