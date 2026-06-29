//functions:it is a reusable block of code
//which performs some action

//python example:
//def function_name(parameters)
//statements
//functtion_name(argument)

//js function example
//define the function
function greet(){
    //code to execute
    console.log("welcome students")
}
//calling the function
greet()
greet()

function greeting(name){
    console.log('Hello ${name}');
}
//call the function
greeting("narendra")

//multiple params
function add(a,b){
    console.log(a+b);
}
add(2,3)

//return: send backs the value where the
//function is called
// function sub(a,b){
//     console.log(a-b)
// }
// let result = sub(10,5)
// console.log(result)


function sub(a,b){
    return a-b;

}
let result = sub(10,5)
console.log(result);

//TASK:WRITE a function for a
//square of a function
function square(num){
    return num*num
    console.log("finish")
}
let square1 = square(5)
console.log(square1)

function test(){
    return "Hello";
    console.log("this code will never execute")
}
let test1 = test();
console.log(test1)

//variable scopes
let college = "city";
function showcollege(){
    console.log(college)
}
showcollege();

//local variable
// function showage(){
//     let age = 22; //local
//     console.log(age);
// }
// showage();
// console.log(age)

//Hoisting:
//JS moves declarations to the top
//before the execution
var name1;

console.log(name1)

name1 = "nani";

//How js sees exactly
// var name;
// console.log(name1);
// name1 = "manoj"

// console.log(age1)

// let age1 = 23;

//hosting with const

// console.log(city)

// const city="vij"

//hoisting with functions
//call
greeting1()

function greeting1(){
    console.log("Hello")
}
//functions are completely hoisted

//function expression:
//store inside a variable

// let result1 = greeting1()

let display = function(){
    console.log("Hello Students")
}
display()