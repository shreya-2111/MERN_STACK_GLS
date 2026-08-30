const result = require("./result");

let total = result.total(80,75,70,65,60);
let p = result.per(total);

console.log("total - ",total);
console.log("per-",p);
console.log("grade-",result.grade(p));