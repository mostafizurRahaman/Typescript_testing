"use strict";
var _a;
//  here we user null properties :
let user = null;
// option declaration :
user = {
    name: "Mostafizur Rahaman",
    email: "fahim654326@gmail.com",
    age: 20,
    friends: [{ name: "Ratan" }, { name: "Ratul" }, { name: "Rakib" }],
};
//  Non null assertion :
user.age = user.age + 7;
//  optional Chaining :
user.friends = (_a = user.friends) === null || _a === void 0 ? void 0 : _a.map((f) => {
    const name = f.name.toUpperCase();
    return { name };
});
console.log(user);
