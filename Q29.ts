/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/

let favorite_fruits: string[]=["Mango","Banana","Melon"];
if((favorite_fruits[0]=="Lychee") || (favorite_fruits[1]=="Lychee") || (favorite_fruits[2]=="Lychee")){
    console.log("You really like Lychee");
};

if((favorite_fruits[0]=="Mango") || (favorite_fruits[1]=="Mango") || (favorite_fruits[2]=="Mango")){
    console.log("You really like Mango");
};

if((favorite_fruits[0]=="Banana") || (favorite_fruits[1]="Banana") || (favorite_fruits[2]=="Banana")){
    console.log("You really like Banana");
};

if((favorite_fruits[0]=="Melon") || (favorite_fruits[1]=="Melon") || (favorite_fruits[2]=="Melon")){
    console.log("You really like Melon");
};

if((favorite_fruits[0]=="Apple") || (favorite_fruits[1]=="Apple") || (favorite_fruits[2]=="Apple")){
    console.log("You really like Apple");
};
export{}