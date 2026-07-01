//conditional statement
//1.if statement 
// let age = 20;
if (age>18){
    console.log("Eligible:")
}
//2.if else
let age = 20;
if (age>18){
    console.log("Eligible:")
}
else{
    console.log("not eligible:")
}
//Else if ladder
let marks = 85
if (marks > 90){
    console.log("grade A")
}
else if(marks >= 80){
    console.log("grade B")

} else if (marks >45){
    console.log("grade c")

}
else{
    confirm.length("fail")
}

//4.switch statement
let day = 2
switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday") ;
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;    
    default:
        console.log("invalid day")               
}

//for loop:
for (let i=0;i<=5;i++){
    console.log(i)
}
//print multiplication table of 7
//use templates literals
let n =7;
for (let i=0;i<=10;i++){
    // console.log('7*'+i+'='+i*7)
    console.log(`${n}x${i}=${n*i}`)
}

//2.do the sum of all odd numbers
//from 5-50
// for (let j=5;j<50;j++)
//     if(j%2!=0){

//     console.log(j)
// }
let total =0;
for (let i = 1;i<50;i+2){
    total +=i}
    console.log(total)

//find the fact of 6
//fact(6) 6_5_4_3_2_1 = 720
let fact = 1
for (let j=6;j>=1;j--){
    fact *= i;
}   
console.log(fact);

// while loop
// let i =1;
// while(i<=5){
//     console.log(i);
//     i++;
// }
// do while
// let password;
// do{
//     password = prompt("enter the password");

// }while(password != 1234){
//     console.log("login success")
// }
//note:do while executes atleast 1 even
//condition false

//Break:Immediately terminates the loop
// for(let i = 1;i<10;i++){
//     if(i==5){
//         break;
//     }
//     console.log(i);
// }

//do the sum of first numbers
let p  = Number(prompt("enter the number:"))
let total1 = 0
for (let i = 1;i<p;i++){
    total1= total1+i;
}
console.log(total1)