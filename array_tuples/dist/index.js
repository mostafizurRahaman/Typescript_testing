"use strict";
let a;
a = [
    "redowan Shawon",
    "hridoy Hossain",
    "rabby Hosssain",
    "Ibrahim Ibn Anower",
    "Pranto",
    "Roman",
];
// a = "mostafizur Rahaman" gives errors because it's an string
const a1 = a.map((i, idx) => idx + 1 + " " + i);
console.log(a1);
let b;
b = [false, true, false, true]; // true
// b = ["mostafizur"]  gives errors because the types of the array are boolean array
console.log(b);
let c;
c = [1, 3, 4, 5, 6, 0]; // correct
// c = [true, false, true] // give errors because the type of c is number[];
console.log(c);
let d; // The array allows three types of data in array like boolean , string , number.
d = ["Mostafiz", 9, 0, false, true];
let conditional;
conditional = ["mostafiz", "hridoy hossain", "Ismail hossain"]; // correct 
// conditional = ['mostafiz', 3, true] // gives only allows one type data at same time 
conditional = [1, 3, 4, 5]; //correct 
conditional = [true, false]; // correct
console.log(conditional);
