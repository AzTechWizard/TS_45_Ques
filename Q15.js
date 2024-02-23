"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
Object.defineProperty(exports, "__esModule", { value: true });
var dinner = ["Ahzam", "Areesha", "Rubaisha"];
console.log("Would you care to join me for a dinner Mr.", dinner[0], "? We would have a great time.");
console.log("Would you care to join me for a dinner Ms.", dinner[1], "? We would have a great time.");
console.log("Would you care to join me for a dinner Ms.", dinner[2], "? We would have a great time.");
console.log("Due to some urgent work Ms. Rubaisha would not be able to join");
dinner.pop();
dinner.push("Sarib");
console.log("Would you care to join me for a dinner Mr.", dinner[0], "? We would have a great time talking to you.");
console.log("Would you care to join me for a dinner Ms.", dinner[1], "? We would have a great time talking to you.");
console.log("Would you care to join me for a dinner Mr.", dinner[2], "? We would have a great time talking to you.");