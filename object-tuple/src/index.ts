/* TypeScript Object && Enums Types  */

let person: {
   name: string;
   age?: number;
   isStudent: boolean;
   skills?: string[];
};

person = {
   name: "Hridoy Hossain",
   // age: 20,
   isStudent: true,
   skills: ["html", "Css", "JavaScript", "Digital Marketing"],
};
const age = person.age! + 5; 
person.skills = person?.skills?.map((a: string) => a.toUpperCase());
console.log(person);
