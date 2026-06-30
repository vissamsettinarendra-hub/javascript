//ES6 Concepts:

//old method
var name = "narendra";
console.log("hello",+name)

//with ES6
const name1 = "narendra";
console.log(`Hello ${name1}`)

//let vs var
var name = "rahul";
var name = "bala";
var name = "banana";
console.log(name)

//var redeclares the variables
//which can lead to bugs

//let: when the value 
//needs to be changes
let age = 18;
age = 21;
console.log(age)

//const: ehen dont
//want to change value
const pi = 3.14;
//pi =3.15;
// const pi = 3.17; const redeclare

//objects with const
//values can bae modified
const student = {
    name:"manish",
};
student.name = "rahul";
console.log(student)

// Arrow Functions

// Normal Function
function greet() {
    console.log("Welcome");
}

greet();

// Arrow Function
const greet1 = (name) => {
    return `Hello ${name}`;
};

console.log(greet1("Narendra"));

// Arrow Function for Addition
const adding = (a, b) => {
    return a + b;
};

console.log(adding(10, 20));

// Short Arrow Function (Implicit Return)
const greet2 = name => `Hello ${name}`;

console.log(greet2("Rahul"));

const addition = (a,b) =>{
    return a+b
}
console.log(addition(10,20))

//task:create an arrow func
//to calculate simple interest



const simpleInterest = (principal, rate, time) => {
    return (principal * rate * time) / 100;
};

// Example
let si = simpleInterest(10000, 5, 2);

console.log( si);

// const app = () => {
//     return <h1>Hello</h1>
// }

//Expression :
let a = 10;
let b = 20;
console.log(`sum is ${a+b}`)

//Multiline line strings:
let message = 
`Hello I am a good boy
also a good student`;
console.log(message)

//default parameters
function greet3(name ="guest"){
    console.log(`Hello ${name}`)
};
greet3()

const greet4=(name="guest") =>{
    console.log("hello" + name)
};
greet4()

//destructuring:allows extracting values from arrays or objects into variables
let colors = ["red","blue","yellow","white"]
let first = colors[0];
console.log(first)
let second = colors[1];
console.log(second)

//destructuring
let [first1,second1] = colors;
console.log(first1)
console.log(second1)

let numbers = [10,20,30,40]
// let x =10
// let y = 20
// let z = 300
let [x,,z] = numbers;
console.log(x);
console.log(z)

//rest operator with destructuring
let [first2,...remaining] =numbers;
console.log(first2);
console.log(remaining)


// Object Destructuring

let faculty = {
    name8: "ashok",
    branch8: "MI",
    f_id: 111
};

// Object Destructuring
let { name8, branch8 } = faculty;

console.log(name8);
console.log(branch8);

//renaming  the variables
let {name8:facltyname} = faculty;
console.log(facltyname)
console.log(faculty)

//default values
let faculty1 = {
    name9: "ashok",
    branch8: "MI",
    f_id: 111
};

// Object destructuring with a default value
let { name9, city = "hyd" } = faculty;

console.log(name8); // ashok
console.log(city);  // hyd


// Nested Object Destructuring
let employee = {
    empName2: "Narendra",
    department2: "IT",
    empId2: 101,
    address2: {
        city2: "Guntur",
        state2: "Andhra Pradesh"
    }
};

let {
    empName2,
    department2,
    address2: { city2, state2 }
} = employee;

console.log(empName2);
console.log(department2);
console.log(city2);
console.log(state2);

//advanced ES6 concepts
//spread operator(...):
//expand an array or object into individual
//elements or properties
//usedd for:
//1.copy arrays
//2>merge arrays
//3.copy objects
//4.merge objects
//5.pass array elements
//as function arguments

//syntax:...array,...object

//example:
let nums=[10,20,30,40]
//spread expands array into individual vallues
console.log(...nums)

//example-2:
let arr1=[10,20,30,40]
let arr2=[...arr1];
arr2.push(60);
console.log(arr1);
console.log(arr2);

//example-3:
let frontend=["HTML","CSS"]
let backend=["Node","Express"]
let fullstack=[...frontend,...backend]
console.log(fullstack)

//spread objects:
let friends = {
    f_name:"julie",
    age:22
};
let copy = {
    ...friends
};
console.log(copy)

//merging the object
let personal = {
    firstname:"nani"
};
let address = {
    current_city:"Hyde"
};
let merged = {
    ...personal,
    ...address
};
console.log(merged)