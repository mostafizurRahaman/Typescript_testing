"use strict";
// Return Type Void : void means return no values.
function normal() {
    console.log("normal");
}
// Return Type number
function add(a1, a2) {
    return a1 + a2;
}
console.log(add(20, 28));
// Return Type string
function fullName(a1, a2) {
    return a1 + " " + a2;
}
console.log(fullName("Mostafizur", "Rahaman"));
// Function Expression
const subtraction = function (a1, a2) {
    return a1 - a2;
};
console.log(subtraction(2, 1));
// Arrow Function
const show = (a) => a;
console.log(show(7));
// Optional Parameters :
const multiplication = (a, b, c1) => {
    return a + b + (c1 || 1);
};
//  Default parameter :
const totalAmount = (rice, bannana, tea = 0) => {
    return rice + bannana + tea;
};
console.log("ratan", totalAmount(100, 20));
console.log(totalAmount(19, 30, 30));
//  Rest parameter:
const RestParameter = (...numbers) => {
    return numbers.reduce((pre, cur) => pre + cur, 0);
};
console.log(RestParameter(1, 2, 7, 7, 8, 88, 888, 8899, 772));
// CallBack Function
const jog = (a1, b2) => a1 + b2;
const totalResult = (a, a1, b1) => a(a1, b1);
console.log(totalResult(jog, 4, 5));
// //  Function Signature :
// const addition: (a1: number, a2: number) => number = (a1, a2) => {
//    return a1 + a2;
// };
// console.log(addition(10, 20));
// // function signature :
// let generateName:(a:string,b:string, c?:string) => string ; 
// // function declaration: 
// generateName = (a, b, c) => {
//    return a + " " + b + " " + (c || " "); 
// }
//  call and console the function : 
// console.log(generateName("Mostafizur", "Rahaman", "Fahim")); 
// function signature :
let generateName = (a, b, c) => {
    return a + " " + b + " " + (c || " ");
};
//  call and console the function : 
console.log(generateName("Mostafizur", "Rahaman", "Fahim"));
