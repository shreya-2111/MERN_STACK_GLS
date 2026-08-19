let str = "hello" // hello
let str1 = new String("hello world") //string object
console.log(str1.padEnd(15,"*"))

let str2 = new String("hello world!! have a nice day")
let strr = str2.split(" ")
console.log(strr)
console.log(strr[4]);//nice

let strr1 = str1.split("!")
console.log(strr1)

let strr2 = str1.split(" ",2)
console.log(strr2)