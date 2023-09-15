/*let a = 67;
 a = 56;
 console.log(a);

const pi = 3.14

//number 

let age = 25; // Number Literal 
let x = 6.7;
console.log(typeof x); 

//string

let name = 'Adrianne';
name = "a";
console.log(name);

//boolean 

isAuthenticated= true; //Boolean Literal 

let p = undefined;
console.log(typeof p); 

//null

let color = null;
console.log(typeof color); 

isAuthenticated = "B";
console.log(typeof isAuthenticated); 


// Objects in JS
let student = {
    id : 101,
    name : 'Ana'
}

student.name = 'Adam';

property = 'id';
student[property]=109;
console.log(student);


//Arrays in Js

let students=['Ana' , 'Adam' , 'Sam' , 345];


students[4] = 'Millie';
console.log(students);



//Types of DMS

//1. Control flow statements

//Simple-if
let age = 1;

if(age>=18)
console.log("Eligible");
else
console.log("Not Eligible");

//if-else

let x=10;

if(x>=2)
x=x+3;
else
x=x+4;

console.log(x);

//if...else...if Ladder
let marks = 98;

if(marks>90)
grade='A';
else if(marks>75)
grade='B';
else if(marks>50)
grade='C';
else
grade='D';

console.log(grade);

//Ternary Operator
let result;
result = (6<7) ? true : false;
console.log(result);

//Loops in Js

//1. for
//2. while
//3. do...while

for(let i = 0; i<10 ; i++)
{
    console.log("Welcome to this course!");
}

let i=10;
while(i>0)
{
    console.log(i);
    i--;
}

let k=10;
do{
    console.log(k);
    k--;
}while(k<0);

//Loops in Arrays & Objects

let enrolledStudents = {
    id : 101,
    name : 'Ana'
}

//for..in loop

for(let key in enrolledStudents){
    console.log(key , enrolledStudents[key]);
}

let Marks = [23 , 56 , 78];
for(let index in Marks){
    console.log(index , Marks[index]);
}

//for..of loop

for(let mark of Marks){
    console.log(index);
}

//Functions in JS

bakeacake(flour, milk , eggs , time , temp)
{
    //steps to bake a cake
}

function add(num1 , num2){
    let sum = num1+num2;
    return sum;
}

let result=add(5 , 45);
console.log(result);

*/

// Functions in JS

// Types of functions

/*
function func_name(list of para)
{
    //Code for the task
    return 1;
}


function add(){
    let num1=34, num2=43;
    let sum = num1+num2;
    return sum;
}

let result=add();
console.log(result);

function welcome()
{
    console.log("Welcome to this course!")
}

welcome();



//Scope of Variable

//let
//const
//var

function demo(){
    for(var i = 0; i<5 ; i++){
        console.log(i);
    }
            console.log(i);
}

demo();

var color = 'blue';
let ame = "Ana";



// String Manipulation 

let string = "I'm an Avocado!!";
console.log(string);

let welcome = " She said, \"I\'m a student\" ";
console.log(welcome);

//Concatenation 
console.log("Hello"+" Folks");

console.log(987497 + 34597);



// Basic String functions

let string = "I'm an Avocado!!";

let n = "124";

let num = Number(n);
console.log(typeof(num));
console.log(num.toString());

//Template Literals

console.log(string+"I have"+ num+ "cals.");

let temp = `${string} I have ${num} cals.`
console.log(temp);



//String Functions

//Number()
//to.String()
//length()

let string = "I'm an Avocado!!";
console.log(string.length);


console.log(string.concat(" Pleased to meet you!!!"));

let x = "sTop";

let X = x.toLowerCase();
console.log(X);


//String Functions - II

let string = "I'm an Avocado!!";
let str = "oiufociuh;ivfoytxluv;v"

//slice 

console.log(string.slice(4, 10));

console.log(str.lastIndexOf(";"));

*/

//Arrow Functions

//add()
let demo = (name) => console.log("Hi " +name +" This is the Arrow function!");

demo("Muskan");

console.log("Please wait!! Still loading...")
setTimeout(()=>{
    console.log("Here are your results!!");
} , 3000);
