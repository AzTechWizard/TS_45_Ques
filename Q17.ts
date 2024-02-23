// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

let dinner:string[]=["Ahzam", "Areesha", "Rubaisha"];
console.log("Dear",dinner[0], ",you are invited to dinner. Please join us for an evening of great food and conversation.");
console.log("Dear",dinner[1], ",you are invited to dinner. Please join us for an evening of great food and conversation.");
console.log("Dear",dinner[2], ",you are invited to dinner. Please join us for an evening of great food and conversation.");
console.log("Due to some urgent work Ms. Rubaisha would not be able to join");
dinner.pop();
dinner.push("Sarib");
console.log("Dear",dinner[0], ",you are invited to dinner. Please join us for an evening of great food and conversation.");
console.log("Dear",dinner[1], ",you are invited to dinner. Please join us for an evening of great food and conversation.");
console.log("Dear",dinner[2], ",you are invited to dinner. Please join us for an evening of great food and conversation.");
console.log("I would like to inform my dear guests that I have found a bigger table so we can invite more guests for dinner");
dinner.unshift("Bazil");
let mid_index: number= (dinner.length/2);
dinner.splice(mid_index, 0, "Simrah");
function append( add_name: string ): void {
     dinner.push(add_name);
};
append( "Wania" );
console.log("Dear",dinner[0], ",you are invited to dinner. Please join us for an evening of great food and conversation.");
console.log("Dear",dinner[1], ",you are invited to dinner. Please join us for an evening of great food and conversation.");
console.log("Dear",dinner[2], ",you are invited to dinner. Please join us for an evening of great food and conversation.");
console.log("Dear",dinner[3], ",you are invited to dinner. Please join us for an evening of great food and conversation.");
console.log("Dear",dinner[4], ",you are invited to dinner. Please join us for an evening of great food and conversation.");
console.log("Dear",dinner[5], ",you are invited to dinner. Please join us for an evening of great food and conversation.");
console.log("Dear guests, because of the unsuitable weather, the table will not be able to arrive in time, and now I have space for only two guests.");
console.log("Dear",dinner[5],", I am sorry that I can not invite you to dinner.");
dinner.pop();
console.log("Dear",dinner[4],", I am sorry that I can not invite you to dinner.");
dinner.pop();
console.log("Dear",dinner[3],", I am sorry that I can not invite you to dinner.");
dinner.pop();
console.log("Dear",dinner[2],", I am sorry that I can not invite you to dinner.");
dinner.pop();
console.log("Dear",dinner[0],", I would like to inform you, that you are still invited to dinner.");
console.log("Dear",dinner[1],", I would like to inform you, that you are still invited to dinner.");
dinner.pop();
dinner.pop();
console.log(dinner);
export{}