"use strict";
/* Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.
Call the function three times, using a different number of arguments each time.*/
Object.defineProperty(exports, "__esModule", { value: true });
function sandwich(items) {
    console.log("Order summary:\n");
    if (items.length == 0) {
        console.log("You ordered an empty sandwitch");
    }
    else {
        console.log("You ordered with following items:\n");
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            console.log("- ".concat(item));
        }
    }
}
;
sandwich(["ham", "cheese", "lettice"]);
sandwich(["tomato", "olives"]);
sandwich(["Sauce"]);
