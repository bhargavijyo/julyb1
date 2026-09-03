"use strict";
/*let isLoggedIn: boolean = true;
let isAdmin: boolean = false;
console.log(isLoggedIn);
console.log(isAdmin);

let n = "JASIM";
console.log(n);*/
//let sname: string = "Ravi";
/*let sage: number = 23;
let isStudent: boolean = true;

console.log(sname);
console.log(sage);
console.log(isStudent);*/
/*let course: string = "CSE";
let msg: String =`hello`;
console.log(sname);
console.log(course);
console.log(msg);*/
//My name is JASIM and I am 30 years old
let studentname = "JASmine";
let studentage = 30;
console.log(`My name is ${studentname} and I am ${studentage} years old.`);
let dage = 34;
let dsalary = 50000;
let dpercentage = 98.7;
let dtemperature = -30;
console.log(dage);
console.log(dsalary);
console.log(dpercentage);
console.log(dtemperature);
let price = 500;
let quantity = 4;
let total = price * quantity;
console.log(total);
let userName = "BINDU";
let passwordCrct = true;
if (passwordCrct) {
    console.log(`${userName} logged in successfully`);
}
else {
    console.log("Invalid password");
}
let selectedUser = null;
console.log(selectedUser);
let selectedResult = undefined;
console.log(selectedResult);
let target = "Bye";
//target=100;
//target.toFixed(2);
//target = false;
console.log(target.toUpperCase());
let tvalue = "thanusha";
//tvalue = "leela";
//tvalue = 500;
//tvalue = true;
if (typeof tvalue === "string") {
    console.log(tvalue.toUpperCase());
}
function greet() {
    console.log("Hello students");
}
function throwError(message) {
    throw new Error(message);
}
let bigNumber = 123456677890673495726n;
console.log(bigNumber);
let num1 = 100;
let num2 = 200n;
//let sum = num1 + num2; // Error: Cannot mix BigInt and other types
let sum = BigInt(num1) + num2; // Convert num1 to BigInt before addition
console.log(sum);
const mySymbol1 = Symbol("m");
const mySymbol2 = mySymbol1;
console.log(mySymbol1 === mySymbol2); // true, same symbol
let s = ["Ravi", 22];
console.log(s);
console.log(s[0]);
console.log(s[1]);
