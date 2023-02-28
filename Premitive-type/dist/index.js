"use strict";
/*

Infer : What is infer ?

Infer মানে হচ্ছে কোনো ভেরিয়েবলের টাইপ ধরে নেওয়া । কোড এডিটর যখন কোনো একটা ভেরিয়েবলের টাইপ বুজতে পারে তখন তাকে infer করা বলে।

সাধারণত একই  সাথে Declare এবং value assign করলে Infer  হয় ।

*/
let a = "Mostafizur Rahaman"; // Typescript infers the variable value as string. 
let b; // typescript infers variable type as any: In this case we need to infer the type explicitly. 
//  if we don't declare the type implicitly It can store all types of data. like below : 
b = "ratan";
b = false;
b = 40;
b = null;
b = undefined;
//  But After infer an specific type : The variable only receives that types values : 
let c;
c = "ratan kumar"; // run successfull ; 
// c = 40; // gives error because the value is not string . 
let d;
d = 10; // run successfully; 
// d = false // gives error because the value is not number ; 
console.log(d);
// so we need to infer when we declare and assign  the variable two different line. 
console.log("Typescript ");
