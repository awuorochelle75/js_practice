console.log("Hello")

//window.alert(`This is  Rochelle learning Js!`)

//document.getElementById("my-heading").textContent=`Hello Rochelle`;
//document.getElementById("my-para").textContent="Welcome to Gemini - your most desired AI platform"

//VARIABLES
//let x;
//x = 123;

//console.log(x);

//Data types
//NUmbers
//let age=25;
//let price=10.99;
//let gpa=3.7;

/*
console.log(`You are  ${age} years old`);
console.log(`The price of sugar is ${price}`);
console.log(`My university grade is ${gpa}`);

//Strings
let firstName="Rochelle";
let lastName="Awuor";

console.log(typeof firstName);
console.log(`My fullname is ${firstName} ${lastName}`)

//Boolean

let online= true;

console.log(`Is Rochelle online:${online}`);
*/

//let fullName = "Rochelle Awuor";
//let age = 24;
//let isStudent = true;

//document.getElementById("p1").textContent = fullName;
//document.getElementById("p2").textContent = age;
//document.getElementById("p3").textContent = isStudent;

//ARITHMETIC OPERATORS

let students = 30;

//Addition
// = students + 1;

//Subtraction
//students = students - 1;

//Multiplication
//students = students * 2;

//Division
//students = students / 2;


//Exponential
//students = students **2;

//Modulus - this is the value that remains after division(remainder)

//students = students % 3

//Augmented assignment operators
/*
students += 1;
students -=1;
students *= 1;
students **=1;
students /=1;
students %=1;
*/

//Increment & Decrement
//students ++;
//students --;

//Operator precedence
//1.parenthesis
//2.Exponential
//3.Division % modulus
//4.Multiplication
//5.Addition
//6.Subtraction
 
//let result = 1 + 2 * 3 + 4 **2;
//console.log(result);

//HOW TO ACCEPT USER INPUT
//Using the window prompt

//let username;

//username = window.prompt("Whats your name")

//console.log(username);

//Using the html textbox

//let username;

//document.getElementById("mySubmit").onclick = function (){
   // username = document.getElementById("myText").value;
   // console.log(username);
//}

//Typeof conversion - this is changing the data type of a value to another.(strings,numbers,booleans)

/*
let age = window.prompt("How old are you?");
age = Number(age);
age+=1;

console.log(age);
*/

//CONSTANT -these are variables that cant be changed after you assigned them.

/*
const PI =3.142;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
   radius = document.getElementById("myText").value;
   radius = Number(radius);
   console.log(radius,typeof radius);
   circumference= 2 * PI * radius ;
   document.getElementById("myH3").textContent = circumference + "cm";
   console.log(circumference,typeof circumference);
  
}
*/

//COUNTER PROGRAM

/*
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn =document.getElementById("increaseBtn");
const counterLabel = document.getElementById("counterLabel");
let count = 0;
 
increaseBtn.onclick = function () {
   count ++;
   counterLabel.textContent = count;
}

decreaseBtn.onclick = function () {
   count--;
   counterLabel.textContent = count;
}

resetBtn.onclick = function () {
   count = 0;
   counterLabel.textContent = count;
}


*/

//Math - built in objects that provides a collection of properties and methods

let x = 3;
let y = 2;
let z = 1;

//z = Math.round(x);
//z = Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x);
//z = Math.pow(x, y);
//z = Math.sqrt(x);
//z = Math.log(x);

//Trigonometry functions
//z = Math.sin(x)
//z = Math.cos(x)
//z = Math.tan(x)

//z = Math.abs(x)
//z = Math.sign(x)

//let max = Math.max(x,y,z)
let min = Math.min (x,y,z);


console.log(min);

 






