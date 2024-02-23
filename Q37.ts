/* Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/


function make_shirt(size:string="large",message:string="I love TypeScript"): void {
    console.log("The size of your shirt is:",size,"& the messsage that will be printed on it is:",message,".");
}
console.log(make_shirt());
console.log(make_shirt("medium"));
console.log(make_shirt("XL","My name is Ahzam"));
export{}
