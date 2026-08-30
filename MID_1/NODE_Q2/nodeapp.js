const fs = require("fs");

//Create
fs.writeFileSync("notes.txt", "NodeJS exam");
console.log("File create");

//Read
const data = fs.readFileSync("notes.txt","utf8");
console.log(data);

//Append
fs.appendFileSync("notes.txt", "\n Learn fs module");
console.log("added");

//Rename
fs.renameSync("notes.txt","newnote.txt");
console.log("Rename"); 