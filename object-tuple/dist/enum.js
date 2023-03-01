"use strict";
// TypeScript Enums :
var Friends1;
(function (Friends1) {
    Friends1[Friends1["Hridoy"] = 0] = "Hridoy";
    Friends1[Friends1["Ratul"] = 1] = "Ratul";
    Friends1[Friends1["Mostafiz"] = 2] = "Mostafiz";
})(Friends1 || (Friends1 = {}));
var Friends;
(function (Friends) {
    Friends[Friends["Hridoy"] = 30] = "Hridoy";
    Friends[Friends["Ratul"] = 50] = "Ratul";
    Friends[Friends["Mostafiz"] = 51] = "Mostafiz";
})(Friends || (Friends = {}));
console.log(Friends[30]);
console.log(Friends[50]);
console.log(Friends[51]);
