"use strict";
// function add(num1: number, num2: number):{num1:number, num2:number}{
//    return {num1, num2}
// }
// const result:{num1:number, num2:number} = add(19, 39); 
// console.log(result); 
// function add(first:string, last:string):string{
//    return first + " " + last; 
// }
// const fullName : string = add("Mostafiz", "Rahaman"); 
// console.log(fullName); 
// const add = function  (n1:number, n2:number):number {
//    return n1 + n2; 
// }
// const result = add(1, 3);
// console.log(result); 
// const add  = (a:number):number => a; 
// const result:number = add(10); 
// console.log(result); 
// const add  =(a1:number, a2:number , a3?:number):number =>{
//    return a1 + a2 + (a3 || 0); 
// }
// const result:number = add(2, 4); 
// const add = (a1:number, a2:number, a3:number = 5):number => {
//    return a1 + a2 + a3;
// }
// console.log(add(1, 3)); // result = 9 
// console.log(add(1,3,3)); // result = 7 
// Rest Operator : 
const add = (...numbers) => {
    const func = (pre, cur) => pre + cur;
    return numbers.reduce(func, 0);
};
console.log(add(1, 3, 4, 5, 6, 7, 8889));
console.log(add(1, 3, 4, 5, 6, 6, 7, 89));
// 
