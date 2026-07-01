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

//copy entire array
//let nums = [10,20,30,40,50]

//let result1 = nums.slice()
//console.log(result1)

//task:arr=[10,20,30,40,50,60]
//crete a new array containing elements
//from index 2 - 4
// Task: Create a new array containing elements from index 2 to 4

let arr2 = [10, 20, 30, 40, 50, 60];

let newArray = arr2.slice(2, 5);

console.log(newArray);

//string::sequence of characters
//closed '',"",``,
// let name = "koduru";
// let name1 = "machavaram";
// let name2 = "mothadaka";
let str = "Hello"

console.log(str[0])
console.log(str[1])
console.log(str[2])
console.log(str[3])

//string length
console.log(str.length)

//Immutable
str[0]="M";
console.log(str)

//traverse over the string
for(i=0;i<str.length;i++){
    console.log(str[i])
}

//for of
for(let ch of str){
    console.log(ch);
}

//string methods
let firstname = "raju"
console.log(firstname.toUpperCase());
console.log(firstname.toLowerCase());

//removing the extra spaces
let hello = " Bye ";
console.log(hello.trim());

//include()
let course = "JavaScript";
console.log(course.includes("Script"))

//startwith
console.log(firstname.startsWith("r"))
//ends with
console.log(firstname.endsWith("u"))

//indexof:
console.log(firstname.indexOf("r"))

//lastindexof:
console.log(firstname.lastIndexOf("a"))

//replace:
let str1 = "I Love javascript"

console.log(str1.replace("javascript","python"));
// console.log(str1)

//replaceall:
let str2 = "cat dog cat"
console.log(str2.replaceAll("cat","lion"));

//slice:
console.log(course.slice(0,3));

//substring:
let str3 = "programming"
console.log(str3.substring(3,8));

//split:
let str4 = "HTML,CSS,JS,RECACT"
console.log(str4.split(","));

//charAt:
// console.log(str4,charAt(4));

//concat():
let first = "narendra"
let last = "naidu"
console.log(first.concat(" ",last));

//objects :collection of key:value pairs
let student = {
    name:"bala",
    rollno:22.0,
    course:"java",
    is_permanent :true
};
console.log(student)
console.log(student.name)
console.log(student.rollno)
console.log(student["course"])

//add a new property
student.city = "guntur"
console.log(student.city)

//update the values
student.rollno = 9;
console.log(student.rollno)


//delete property
delete student.city;
console.log(student)

//task:create an object
//named:employee
//store the detailes of employee
//update the salarly to 45000
//remove his city
//write a function expression inside
//the object and call it outside
// Create an object named employee
//add birth details in a nested onj
let employee = {
    name: "Narendra",
    empId: 101,
    department: "IT",
    salary: 40000,
    city: "Guntur",


    // Function expression inside the object
    display: function() {
        console.log(this.name);
        console.log( this.empId);
        console.log(this.department);
        console.log( this.salary);
    }
};

// Update the salary
employee.salary = 45000;

// Remove the city
delete employee.city;

// Call the function outside the object
employee.display();

// Display the final object
console.log(employee);


//nested object
// Nested object example

let employee1 = {
    name: "Rahul",
    empId: 102,
    salary: 40000,

    address: {
        city: "Hyderabad",
        state: "Telangana",
        pincode: 500001
    },

    display: function() {
        console.log( this.name);
        console.log(this.empId);
        console.log(this.salary);
        console.log(this.address.city);
    }
};

// Update salary
employee1.salary = 45000;

// Remove city from the nested object
// delete employee1.address.city;

// Call the function
employee1.display();

// Print the complete object
console.log(employee1);


//traversing over the objects
let student1 = {
    name: "Bala",
    rollNo: 22,
    course: "Java",
    city: "Guntur"
};

for (let key in student1) {
    console.log(key, ":", student1[key]);
}
//only keys
console.log(Object.keys(employee1))

//in a list formate
console.log(Object.entries(employee1));

//for..of
for (let [key, value] of Object.entries(employee1)) {
    console.log(key, value);
}