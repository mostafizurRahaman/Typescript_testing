let a: string[];

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

let b: boolean[];
b = [false, true, false, true]; // true
// b = ["mostafizur"]  gives errors because the types of the array are boolean array

console.log(b);

let c: number[];
c = [1, 3, 4, 5, 6, 0]; // correct
// c = [true, false, true] // give errors because the type of c is number[];
console.log(c);

let d: (string | number | boolean)[]; // The array allows three types of data in array like boolean , string , number.
d = ["Mostafiz", 9, 0, false, true];

let conditional: string[] | boolean[] | number[];
conditional = ["mostafiz", "hridoy hossain", "Ismail hossain"]; // correct 
// conditional = ['mostafiz', 3, true] // gives only allows one type data at same time 
conditional = [1, 3, 4,5] //correct 
conditional = [true, false] // correct
console.log(conditional);
