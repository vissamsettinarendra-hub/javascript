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

//function stored in a variable
let display = function(){
    console.log("Hello Students")
}
//calling the variable
display()

//hoisting with function expression
// test2()

// let test2 = function(){
//     console.log("Hi")
// }
//example 2:

let calculate_area = function(length,width){
    return length*width;

}
console.log(calculate_area(3,5))

//create a function that returns lagest of two numbers
let task1 = function(num1, num2) {
    return (num1 > num2) ? num1 : num2;
}

console.log(task1(10, 20)); // 20

//create a function expression to calculate area of a circle
// Function expression to calculate the area of a circle
let calculateArea = function(radius) {
    return Math.PI * radius * radius;
}

console.log(calculateArea(5));


//arrays:collection of elements 
//arry is the collection of multiple values stored in a single variable
//student = "nani"
//student1,student2,student3...n

//arr["nani",3.34,True]python

//let newArray = [value1,value2,value3]

let arr1 = ["Apple","banana","Custard"]
console.log(arr1)
console.log(arr1[0])
console.log(arr1[1])
console.log(arr1[2])

let numbers = [10,20,30,40]
console.log(numbers[numbers.length-1])

//returns length
console.log(numbers.length)

// Modifying an element
let fruit = ["Apple", "banana", "pine"];

// Modify the first element
fruit[0] = "Mango";
console.log(fruit);

// Traversal using for loop
for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}

// Traversal using for...of loop
for (let item of fruit) {
    // item stores the current element
    console.log(item);
}

let number1 = [10, 20, 30, 40, 50];
let total = 0;

for (i = 0; i < number1.length; i++) {
    total += number1[i];
}

console.log(total);

//find largest element 
let arr = [10,50,60,90,5,95];

let largest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

console.log(largest);

//push -- adding element
arr.push(5)
console.log(arr)

arr.push(19,44)
console.log(arr)

//remove the last element
arr.pop()
console.log(arr)

//restoring the removed element
let removed = arr.pop();
console.log(removed)

//remove the first element
arr.shift();
console.log(arr);

let firstremoved = arr.shift();
console.log(firstremoved);

//add element at the beginning
arr.unshift(10);
console.log(arr)


//python -- slicing
//arr[start:end:step]
//splice() --js
//used for --1.adding 2.deleting elements

//Syntax:
// Array.splice(startIndex,delete_index,new_values)

let veggies = ["Carrot","Betroot","Brinjial"]
veggies.splice(1,1)
//1 -->startindex
//1 -->deleteindex
console.log(veggies)
//addding element
veggies.splice(1,0,"bitter guard")
console.log(veggies)
//replacing element
veggies.splice(1,1,"bottle guard")
console.log(veggies)

//slice creates a copy of a portion of array
//arrary.slice(start,end)
let nums = [10,20,30,40,50]

let result2 = nums.slice(0,3)
console.log(result2)
