"use strict";
//  we Discuss here primitive  types && Union Type in typescript :
let school;
school = "Bamni Adarsha High school";
// the variable type is string if we want store another types data in the variable, typescript gives an errors : example :
// school = 5; // gives error because type are not matched .
let age; // only allows  number not string , boolean or null or undefined or any types
age = 2;
// age = false; // gives error because the type are not matched.
let isGf;
isGf = false;
isGf = true;
// isGf = 3; //gives error the because the type is not matched.
/* ==================================
      Union Types
================================== */
// Union Types: Union allows to define  multiple specific types for variable .
// for define multiple types we can use or sign (|);
let myFatherAge; // the variable allows three types of data now because we define the variable types are string , number , boolean ;
myFatherAge = "Fifty one";
myFatherAge = 51;
myFatherAge = true;
let isSister;
isSister = 'two';
isSister = 2;
isSister = true;
isSister = NaN; // allows because the type of NaN is number 
isSister = []; // gives errors because the type is array . array is not allows here . 
/*
Const Issus:const variable think the values as a type of the const variable ;

1. If we don't  set type explicitly , The variable set it's value as a type.

*/
const Name1 = "sajib"; // the type is now sojib  
const Name2 = "Sakib";
const Name3 = "trainingMug";
