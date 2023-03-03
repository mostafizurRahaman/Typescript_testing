//  Type Alias for string :
type MyName = string;
let a: MyName = "Mostafizur Rahaman";

// Type Alias for boolean:
type IsRight = boolean;
let b: IsRight;
b = true;

// Type Alias for Number :
type Numeric = number;
let c: Numeric;
c = 4;

// Type Alias for Union Type :
type famous = "sakib" | "tamim" | "mehedi" | "Liton" | "Musfiq" | "Mostafiz";
type anyOne = string | number | []; 
let cricketer: famous = "tamim";

//  Type for Array or Tuple :
type myList = [string, string, number, boolean, string];
const rakib: myList = ["mostafiz", "fahim", 2, false, "hridoy"];

// Type for Array String or Array Number or Array Boolean ;

type anyArray = string[] | number[] | boolean[];
let hridoyFriends: anyArray = [
   "mostafiz",
   "fahim",
   "yeasin",
   "ismail",
   "jahed",
   "parvage",
];
let listNumbers: anyArray = [1, 3, 4];
let marriedList: anyArray = [true, false];

// Type for an for an array which contains all data types or Union Array :
type AllDataTypesArray = (string | number | boolean)[];
let myList3: AllDataTypesArray;
myList3 = [2, 4, "false", false];

// Games Type :
type Games = {
   name: "Cricket" | "Football" | "Ha do do" | "Badminton" | "Basket Ball";
   value: boolean;
};
// Type for object:
type Person = {
   name: string;
   age: number;
   isSingle: boolean;
   games: Games[];
   email: string;
};

const person: Person = {
   name: "Mostafizur Rahaman",
   age: 20,
   isSingle: true,
   games: [
      {
         name: "Badminton",
         value: false,
      },
      {
         name: "Cricket",
         value: false,
      },
   ],
   email:"fahim@gamil.com"
};


// Function Signature : 

type Add = (n1:number, n2:number) => number; // function signature's  type here 

const add : Add /*function signature is use */ = (n1, n2) => { 
   return n1 + n2; 
}

console.log(add(29, 38)); 