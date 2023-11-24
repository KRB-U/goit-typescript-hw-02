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
// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };
// const returnedTarget = Object.assign(target, source);
// console.log(returnedTarget);
// 3
function merge(objA, objB) {
    return { ...objA, ...objB };
}
console.log(merge({ a: 1, b: 2 }, { b: 4, c: 5 }));
class Component {
    constructor(props) {
        this.props = props;
    }
}
class Page extends Component {
    pageInfo() {
        console.log(this.props.title);
    }
}
const pairKeyValue = {
    key: "mango",
    value: 22,
};
console.log(pairKeyValue);
// 7
export var UserRole;
(function (UserRole) {
    UserRole["admin"] = "admin";
    UserRole["editor"] = "editor";
    UserRole["guest"] = "guest";
})(UserRole || (UserRole = {}));
const RoleDescription = {
    [UserRole.admin]: "Admin User",
    [UserRole.editor]: "Editor User",
    [UserRole.guest]: "Guest User",
};
console.log(RoleDescription);
//
// function add(num2: number, num3: number): number {
//   return num2 + num3;
// }
// const arrrr: number[] = [234, 445, 645, 464, 5];
// type User5 = {
//   name: string;
//   age: number;
// };
// const obj44: User5 = {
//   name: "mango",
//   age: 22,
// };
// type Size = "sm" | "md" | "lg";
// let val: any = "dfdfg";
// val = 23;
// enum Size {
//   SM = "sm",
//   MD = "md",
//   LG = "lg",
// }
// const button45: Size = Size.SM;
// function add(num2: number, num3: number): void {
//   console.log(num2 + num3);
// }
// type Car = {
//   name: string;
//   color: string;
//   price: number;
//   currency: string;
//   start: () => void;
// };
// const car: Car = {
//   name: "dfdsf",
//   color: "dfgsh",
//   price: 343245,
//   currency: "HJR",
//   start() {
//     console.log("object");
//   },
// };
// type UserObj = { name: string; age: number }[];
// let user55: UserObj = [{ name: "kgj", age: 44 }];
// let arrAny: any[];
// arrAny = [123, "TEXT", { name: "Tom" }, [1, 2, 3], false];
// function fetchUserData(id: string, callback: (data: any) => void): void {
//   // Тут може бути якийсь запит, але ми його заповнимо самі
//   const responseData = { name: "Tom" };
//   callback(responseData);
// }
// // Використання функції:
// fetchUserData("123", (data) => {
//   console.log(data.name); // TypeScript не викличе помилку, навіть якщо поле name не існує
// });
//************
// Напишіть функцію concatenate, яка приймає два параметри типу unknown (можуть бути будь-які значення) і повертає їх об'єднання в рядок. Якщо один з параметрів не є рядком, поверніть порожній рядок.
// function concatenate(one: unknown, two: unknown): number | string {
//   if (typeof one !== "string" || typeof two !== "string") {
//     return "";
//   }
//   return `${one}${two}`;
// }
// console.log(concatenate("dfhg", "ndfgdgsdf"));
// console.log(concatenate("dfhg", 36));
// let arr222: [string, boolean];
// arr222 = ["222", true];
// // arr222 = [true, 222];
// arr222.push("dfgsdgf");
// let fixed: [string, number];
// fixed = ["Text", 10];
// fixed.push("Add this text");
// let tuple: [string, ...number[]];
// tuple = ["hello", 42, 100, 200, 300]; // OK
// console.log(tuple);
// type Employee = {
//   name: string;
//   id: number;
// };
// type Manager = {
//   employees: Employee[];
// };
// type CEO = Employee & Manager;
// const ceo: CEO = {
//   name: "Alice",
//   id: 1,
//   employees: [
//     {
//       name: "Bob",
//       id: 2,
//     },
//   ],
// };
// enum AnimalIds {
//   cat = "cat",
//   dog = "dog",
//   fish = "fish",
// }
// type Animal = {
//   [AnimalIds.cat]: {
//     meow: () => string;
//   };
//   [AnimalIds.dog]: {
//     bark: () => string;
//   };
//   [AnimalIds.fish]: {
//     swim: () => undefined;
//   };
// };
//***********************************
// type Laptop = {
//   screen: number;
//   cpu: string;
//   ram: number;
//   rom: {
//     hdd: number;
//     ssd: number;
//   };
//   graphics: string;
// };
// const laptop: Laptop = {
//   screen: 15.6,
//   cpu: "Intel",
//   ram: 16,
//   rom: {
//     hdd: 1000,
//     ssd: 512,
//   },
//   graphics: "nvidia",
// };
// ****************
// type Goods = {
//   [key: string]: number;
// };
// const laptop2: Goods = {
//   screen: 15.6,
//   weight: 2.5,
//   price: 999.99,
//   ram: 16,
//   storage: 512,
// };
//# sourceMappingURL=index.js.map