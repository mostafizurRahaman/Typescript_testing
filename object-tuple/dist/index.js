"use strict";
var _a;
let person;
person = {
    name: "Mostafizur Rahaman",
    age: 20,
    isMarried: true,
    friends: ["hridoy", "ismail", "rakibul"]
};
person.friends = (_a = person.friends) === null || _a === void 0 ? void 0 : _a.map(p => p.toUpperCase());
console.log(person.friends);
person.age = person.age + 5;
console.log(person);
