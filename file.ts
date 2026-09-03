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
let studentname:string = "JASmine";
let studentage:number = 30;
console.log(`My name is ${studentname} and I am ${studentage} years old.`);

let dage: number = 34;
let dsalary: number = 50000;
let dpercentage: number = 98.7;
let dtemperature: number = -30;


console.log(dage);
console.log(dsalary);
console.log(dpercentage);
console.log(dtemperature);

let price: number = 500;
let quantity: number = 4;
let total: number = price * quantity;
console.log(total);

let userName: string = "BINDU";
let passwordCrct: boolean = true;
if(passwordCrct){
    console.log(`${userName} logged in successfully`);
}else{
    console.log("Invalid password");
}

let selectedUser: null = null;
console.log(selectedUser);

let selectedResult: undefined = undefined;
console.log(selectedResult);

let target: any = "Bye";
//target=100;
//target.toFixed(2);
//target = false;
console.log(target.toUpperCase());

let tvalue: unknown = "thanusha" ;
//tvalue = "leela";
//tvalue = 500;
//tvalue = true;
if(typeof tvalue === "string"){
    console.log(tvalue.toUpperCase());
}

function greet(): void{
    console.log("Hello students");
}

function throwError(message: string): never{
    throw new Error(message);
}

let bigNumber: bigint = 123456677890673495726n;
console.log(bigNumber);

let num1: number =100;
let num2: bigint = 200n;
//let sum = num1 + num2; // Error: Cannot mix BigInt and other types
let sum = BigInt(num1) + num2; // Convert num1 to BigInt before addition
console.log(sum);

const mySymbol1: symbol = Symbol("m");
const mySymbol2: symbol = mySymbol1;
console.log(mySymbol1 === mySymbol2); // true, same symbol

let s: [string, number] = ["Ravi", 22];
console.log(s);
console.log(s[0]);
console.log(s[1]);

enum Direction {
    up,
    down,
    left,
    right
}
console.log(Direction.up); // 0
console.log(Direction.down); // 1
console.log(Direction.left); // 2
console.log(Direction.right); // 3