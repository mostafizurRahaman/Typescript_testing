"use strict";
/* TypeScript Object && Enums Types  */
var _a;
let person;
person = {
    name: "Hridoy Hossain",
    // age: 20,
    isStudent: true,
    skills: ["html", "Css", "JavaScript", "Digital Marketing"],
};
const age = person.age + 5;
person.skills = (_a = person === null || person === void 0 ? void 0 : person.skills) === null || _a === void 0 ? void 0 : _a.map((a) => a.toUpperCase());
console.log(person);
