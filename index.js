"use strict";
function isWeekendNow(day) {
    const IsDayOff = {
        Sat: true,
        Sun: true,
    };
    return IsDayOff.hasOwnProperty(day);
}
// console.log(isWeekendNow("Sat"));
function firstArrayNumbers(arr) {
    return arr[0];
}
let numbers = [65, 34, 54, 6423, 45];
let firstNum = firstArrayNumbers(numbers);
let tupleAdv;
tupleAdv = [1, "two", true];
const arr = [2, 34, 5, 56, 7, 5];
// arr.push(3);
var Codes;
(function (Codes) {
    Codes[Codes["DATA"] = 4] = "DATA";
    Codes[Codes["VALUE"] = 2] = "VALUE";
})(Codes || (Codes = {}));
function declaration(status) {
    return status;
}
console.log(declaration(Codes.VALUE));
var HttpCodes;
(function (HttpCodes) {
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
    HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
})(HttpCodes || (HttpCodes = {}));
const status2 = 200 /* HttpCodes.OK */;
let anyType;
function randName(num, str) { }
let pet;
function isDog(pet) {
    if (isDog(pet)) {
        pet.bark();
    }
    return "bark" in pet;
}
const getUserNames = (users) => {
    return users.map((user) => user.name);
};
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
];
let res = getUserNames(users);
console.log(res);
function compare(top, bottom) {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
}
console.log(compare({
    name: "mago",
    position: 1,
    color: "white",
    weight: 1500,
}, {
    name: "Ajax",
    position: 2,
    color: "Black",
    weight: 1600,
}));
//# sourceMappingURL=index.js.map