const number = require("./number");

let n = 10;

if (typeof n != "number" || isNaN(n)) {
    console.log("Invalid number");
} else {
    console.log("Even/Odd =", number.evenOdd(n));
    console.log("Positive/Negative =", number.positiveNegative(n));
}