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
/*let student = {
    name : "Jasim",
    age: 21, 
    Course : "B.Tech",
    percetage : 90
};

console.log(student);
console.log(student.name);
console.log(student.percetage);
console.log(student["name"]);*/

/*let age =10;
if(age>=18){
    console.log("Your eligible to vote");
}else{
    console.log("Not Eligible");
}*/

/*let marks =45;
if(marks >=90){
    console.log("A Grade");
}else if(marks >= 75){
    console.log("B Grade");
}else if(marks >= 60){
    console.log("C Grade");
}else{
    console.log("Fail");
}*/

/*let age = 20;
let hasVoterid = false;
if(age >=18){
    if(hasVoterid){
        console.log("You can vote");
    }
}*/

/*let day = 6;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}*/

/*let a =80;
let result = a>=35 ? "pass": "faile";
console.log(result);*/

/*console.log("Welcome");
console.log("Welcome");
console.log("Welcome");
console.log("Welcome");
console.log("Welcome");*/
/*let i =1;
for(i=1;i<=5;i++){//123456
    console.log("welcome");
}*/

/*let i =1;
let n=5;
for(i=1;i<=5;i++){//12345
    console.log(n*i);
}*/

/*let i=1;
while(i<=5){
    console.log(i);
    i++;
}*/

/*let i=10;
do{
    console.log(i);
    i++;
}while(i<=5);*/

/*let i=15;
while(i<=5){
    console.log(i);
}*/

/*let fruits = ["Apple", "Mango", "Banana", "Grapes"];
for(let f of fruits){//f represents the value
    console.log(f);
}*/

/*let name = "Bhargavi";
for(let character of name){
    console.log(character);
}*/ 

/*let student = {
    name:"Bhagi",
    age:22,
    role:"developer"
};

for(let s in student){
    console.log(student[s]);
}*/

/*let fruits = ["Apple", "Mango", "Banana", "Grapes"];
for(let f in fruits){
    console.log(f);
}*/

/*function greet(){
    console.log("Hello, students!");
}
greet();

function gt(name){
    console.log("Hello",name);
}
gt("JASIM");*/

/*function add(a,b){
    return a+b;

}
let result = add(10,20);
console.log(result);
*/

/*let b = function(name){
    console.log("hello", name);
};
b("Bhagi");//name ="Bhagi"

function greet(n){
    console.log("Hello", n);
};
greet("JASIM");*/
/*let add = function(a,b){
    return a+b;
};
let result = add(10,20);
console.log(result);*/

/*let add = (a,b)=>{
    return a+b;
};
let result = add(10,90);
console.log(result);*/


/*let s = (num) => num*num;
console.log(s(7));*/

/*let greet = () => console.log("HI,Buddies!");
greet();*/

/*function greet(name, callback){
    console.log("Hello", name);
    callback();
}
function msg(){
    console.log("Welcome to the JavaScript");
}
greet("JASIM", msg);//msg is callback function */

/*function cal(a,b, operation){
    return operation(a,b);
}
function add(x,y){
    return x-y;
}



console.log(cal(90,40,add));*/

/*function cal(a,b, operation){
    return operation(a,b);//a==x b==y =>a*b
}
let result = cal(10, 20, (x,y) => x*y);
console.log(result);*/

//fn as argument 
/*function cal(a,b, operation){
    return operation(a,b);
}
function add(x,y){
    return x*y;
}

console.log(cal(90,40,add));//cal is HOF bcz it receives data from add fn
*/
//fn returning another fn 
/*function great(number){
    return function(value){
        return value * number;
    };
}
let d = great(4);
console.log(d(20));*/
//console.log(d(2));


/*function a(a,b){
    return a-b;
}
console.log(a(29,19));*/
//console.log("Hi,mohan");

/*function mohan(a){
    return function(b){
        return function(C){
            return a+b+C;
        };
    };
}
console.log(mohan(20)(40)(40));*/



/*function multiply(x){
    return function(y){
        return x*y;
    };
}
console.log(multiply(30)(4));*/

/*let d = multiply(2);//x=2
let t = multiply(3);//x=3

console.log(d(20));//2*20 
console.log(t(30));//3*30*/

/*(function(){
    console.log("Hello, students");
})();

(function(name){
    console.log("Hello " +name);
})("Mohan");*/

/*(function(){
    let s = "12345";
    console.log(s);
})();*/

/*function* numbers(){
    yield 10;
    yield 20;
    yield 30;
    yield 40;
}
let generator = numbers();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());*/

/*function* fruits(){
    yield "apple";
    yield "banana";
    yield "mando";
}

let f = fruits();
for(let fruit of f){
    console.log(fruit);
}
*/
/*function bhagi(name){
    console.log("Hi, everyone");
    console.log("hello", name)
}
bhagi("Swapna");*/

/*let s = function(a,b){
    return a*b;
};
console.log(s(5,2));*/

/*let square = (num) => num*num;
console.log(square(5));*/

/*let a = (x,y)=>{
    return x+y;
};
console.log(a(10,60));*/
/*function greet(name, callback){
    console.log("Hello", name);
    callback();
}
function msg(){
    console.log("Welcom to javascript");

}
greet("Swapna", msg);*/

/*let age = 25;
age = "twenty";
console.log(age);*/

//with arrays 
/*let numbers = [10,20,30,40,50];
let num = [60,70,80,90,900];
//let s = [70,80,...numbers,100];
//console.log(s);//
//console.log(numbers);//
let res = [...num,700 ,...numbers];
console.log(res);*/

/*let student1 = {
    name:"Rahul",
    age:22,
    course:"CSE"
};

let s = {
    
    ...student1,
    age:60
};
console.log(s.age);
*/

/*let numbers=[10,20,30];
console.log(...numbers);

function num(...values){
    console.log(values);
}
num(10,20,30,40);
*/
/*function add(a,b){
    return a+b;
}
console.log(add(10,20));*/
 /*function add(...nums){
    let sum=0;
    for(let n of nums){
        sum = sum+n;
    }
    return sum;
 }
 console.log(add(10,20));
 console.log(add(10,20,30));
 console.log(add(10,20,30,40));*/

 /*function studentDetails(name,age, ...skills){
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Skills:", skills);
 }

 studentDetails(
    "Bhargavi",
    22,
    "JavaScript",
    "React",
    "Backkend"
 
 );*/
//Array destructuring
 /*let student = ["Leela", 23, "cse"];
// let name = student[0];
 //let age = student[1];
 //let course = student[2];
 let [name, age, course] = student;
 console.log(name);
 console.log(age);
 console.log(course);
*/

/*let color = ["red", "green", "blue","black","orange"];
//let [c1,c2,c3,c4] = color;
let [c1,,,c4, c5="pink"] = color;
console.log(c1);
//console.log(c2);
//console.log(c3);
console.log(c4);
console.log(c5);*/

//Object Destructuring 
/*let student = {
    name: "JASIM",
    age: 22,
    course: "CSE"
};

let {name, age, course} = student;

console.log(name);
console.log(age);
console.log(course);
*/

/*let student ={
    name: "Bhargavi",
    age:22
};

let {
    name : studentName,
    age: studentAge,
    city= "vizag"
} = student;

console.log(studentName);
console.log(studentAge);
console.log(city);*/
/*let student = {
    name: "JASIM",
    age: 22,
    course: "CSE"
};
let{name, ...studentDetails} = student;
console.log(name);
console.log(studentDetails);*/


let names = ["Ravi", "Swapna", "Leela", "JASIM"];
//names.push("Thanusha");
//names.push("Thanu");
//let removed =names.pop();  
//console.log(removed);  

//let n =names.shift();
//console.log(n);
//names.unshift("Bhanu","ramu");
//names.splice(1,2);//start index=1 , 2=delete values 
names.splice(1,1,"JASIM");
console.log(names);