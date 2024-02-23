"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
var dinner = ["Ahzam", "Areesha", "Rubaisha"];
console.log("Dear", dinner[0], ",you are invited to dinner. Please join us for an evening of great food and conversation.");
console.log("Dear", dinner[1], ",you are invited to dinner. Please join us for an evening of great food and conversation.");
console.log("Dear", dinner[2], ",you are invited to dinner. Please join us for an evening of great food and conversation.");
console.log("Due to some urgent work Ms. Rubaisha would not be able to join");
dinner.pop();
dinner.push("Sarib");
console.log("Dear", dinner[0], ",you are invited to dinner. Please join us for an evening of great food and conversation.");
console.log("Dear", dinner[1], ",you are invited to dinner. Please join us for an evening of great food and conversation.");
console.log("Dear", dinner[2], ",you are invited to dinner. Please join us for an evening of great food and conversation.");
console.log("I would like to inform my dear guests that I have found a bigger table so we can invite more guests for dinner");
dinner.unshift("Bazil");
var mid_index = (dinner.length / 2);
dinner.splice(mid_index, 0, "Simrah");
function append(add_name) {
    dinner.push(add_name);
}
;
append("Wania");
console.log("Dear", dinner[0], ",you are invited to dinner. Please join us for an evening of great food and conversation.");
console.log("Dear", dinner[1], ",you are invited to dinner. Please join us for an evening of great food and conversation.");
console.log("Dear", dinner[2], ",you are invited to dinner. Please join us for an evening of great food and conversation.");
console.log("Dear", dinner[3], ",you are invited to dinner. Please join us for an evening of great food and conversation.");
console.log("Dear", dinner[4], ",you are invited to dinner. Please join us for an evening of great food and conversation.");
console.log("Dear", dinner[5], ",you are invited to dinner. Please join us for an evening of great food and conversation.");
