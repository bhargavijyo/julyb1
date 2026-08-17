//console.log("Welcome to javascript");

/*var name = "Javascript";
var name = "Python";
console.log(name);*/

/*let age = 21;
age = 29;
console.log(age);*/

//let n = "Js";
/*let s = "python";
let n="hasini";
console.log(s);*/

/*const p = 3.14;
const p =3;
console.log(p);*/


/*let s = "Node.js";
var m = "python";
var m = "idiot";

const pi = 3.14;

console.log(s);
console.log(m);
console.log(pi);*/

/*let v= 30;
console.log(v);*/
/*let name = "Ravi";
let age = 69;
console.log(name);
console.log(age);*/

/*let value = alert("Are you student or job holder? ");
console.log(value);

let v = confirm("Are you sure you want to learn and grow in carrer?");
console.log(v);

let result = confirm("Do you want to logout?");
console.log(result);*/

/*let r = confirm("Are you sure you want to delete this file?");
if(r){
    console.log("File deleted");
}else{
    console.log("Delete cancelled");
}*/

/*let name = prompt("Enter your name:");
alert("Welcome " +name);
console.log(name);*/

/*let n = document.writeln("Hello, welcome to javascript");
console.log(n);

let name = "Ajesh";
let res =document.writeln("<br> welcome " +name);
console.log(res);*/

 /*console.log("Javascript started");
 alert("Welcome!");
 let name = prompt("Enter your name?");
 let result = confirm("Do you want to continue?");

 console.log("Name ",name);
 console.log("Continue:", result);
 document.writeln("Hello " +name);
*/

/*console.error("Something wrong!");
console.warn("warning");
console.clear();*/


/*let age = 22;
let price = 99.90;
let temp = -34;
console.log(age,price, temp );*/

/*let name = "Riya";
let city = 'vizag';
let msg = `Hello, JavaScript`;
console.log(name,city,msg);*/

/*let isStudent = true;
let islogged = false;
console.log(isStudent);
console.log(islogged);*/

/*let n;
console.log(n);*/

/*var n = null;
n = "Jasim";
console.log(n);*/

/*let age =30;
let name = "Hasini";
let student = true;
let x;
let y = null;
console.log(typeof(age));
console.log(typeof(name));
console.log(typeof(student));
console.log(typeof(x));
console.log(typeof(y));*/

/*let a = 10;
let b =5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
a++;
console.log(a);
b--;
console.log(b);*/

/*let x =5;
x **= 2; //x = x+5 =>5+5 =10//x= x**2=>5**2=25
console.log(x);*/

/*let a ="10";
let b=10;
console.log(a!=b);*/

/*let age =true;
console.log(!age);*/

//String + other == string
/*console.log(typeof("hello"+"bhagi"));
console.log(typeof("hello"+123));
console.log(typeof("hello"+true));
console.log(typeof("hello"+undefined));
console.log(typeof("hello"+null));
console.log(typeof("hello"+[1,2]));
console.log(typeof("hello"+{k:5}));
*/
//Number implicit 
/*console.log(typeof(123 + "hello" ));
console.log(typeof(123 + 123));
console.log(typeof(123 + true));
console.log(typeof(123 + undefined));
console.log(typeof(123 + null));
//primitive + non-primitive == string
console.log(typeof(123 + [1,2]));
console.log(typeof(123 +{k:5} ));*/

//boolean 
/*console.log(typeof(true + "hello"));//string
console.log(typeof(true + 123));//true =1 and false =0
console.log(typeof(true + undefined));
console.log(typeof(true + null));
console.log(typeof(true + true));
//primitive + non-primitive == string
console.log(typeof(true + [1,2]));
console.log(typeof(true + {k:5}));*/


//NUmber conversion 

/*console.log(Number());
console.log(Number(""));
console.log(Number(123));
console.log(Number("11"));
console.log(Number("abc"));//Nan
console.log(Number("-123"));
console.log(Number(undefined));//Nan
console.log(Number(null));
console.log(Number([1,2,3]));//Nan
console.log(Number({k:5}));//Nan*/

/*console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean("123"));
console.log(Boolean("abc"));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(-20));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([1,2,3]));
console.log(Boolean({k:5}));*/

/*const fruits = ["apple","banana", "mango","orange"];
console.log(fruits);
console.log(fruits[3]);
console.log(fruits[1]);
console.log(fruits[0]);*/

/*let numbers= [10,20,30,40,50,609];
console.log(numbers);
console.log(numbers.length);*/

//Object 
let student = {
    name : "Jasim",
    age: 21, 
    Course : "B.Tech",
    percetage : 90
};

console.log(student);
console.log(student.name);
console.log(student.percetage);
console.log(student["name"]);