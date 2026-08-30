const fs = require("fs");

//Create
fs.writeFileSync("product.txt",
    `
    Laptop - 50000
    Mobile - 20000
    Keyboard - 1500
    Mouse - 800
    Headphones - 2500
    `
);

console.log("File Created");


//Check exists
if (fs.existsSync("product.txt")) {
    //Read
    const data = fs.readFileSync("product.txt","utf8");
    console.log(data);
}
else {
    console.log("File Not exist");
}


//Append
fs.appendFileSync("product.txt", "\n Monitor - 10000");
console.log("New added");



// Error - Try---catch