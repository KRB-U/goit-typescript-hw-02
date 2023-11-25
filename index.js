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
// 5
// interface KeyValuePair<Key, Value> {
//   key: Key;
//   value: Value;
// }
// const pairKeyValue: KeyValuePair<string, number> = {
//   key: "mango",
//   value: 22,
// };
// console.log(pairKeyValue);
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
// Record<K, T>;
// Задача 1: Ви хочете створити об'єкт, який мапить імена користувачів до їх віку.
const usersNames = {
    Mango: 22,
    Kiwi: 33,
    Ajax: 44,
};
// Задача 2: Мапа з іменами місяців до кількості днів у них.
const dayOfMonth = {
    January: 31,
    February: 28,
};
function listDishes(list, category) {
    return list.filter((item) => item.category === category);
}
function isAdult(user) {
    const currentDate = new Date();
    const dateOfBirth = new Date(user.dateOfBirth);
    const currentAge = currentDate.getFullYear() - dateOfBirth.getFullYear();
    return currentAge >= 18;
}
const user = {
    dateOfBirth: new Date(2005, 0, 1),
};
console.dir(isAdult(user));
class Car {
    constructor(brand, year, fuelType) {
        this.brand = brand;
        this.year = year;
        this.fuelType = fuelType;
    }
    getDetails() {
        console.log("Brand: ", this.brand, "Year: ", this.year, "FuelType: ", this.fuelType);
    }
}
const car = new Car("mazda", 2023, "petrol");
car.getDetails();
class Student {
    constructor(name, studentID, major) {
        this.name = name;
        this.studentID = studentID;
        this.major = major;
    }
    introduce() {
        console.log(`My name is ${this.name}. My major is ${this.major}`);
    }
}
const student = new Student("Mango", 22333, "Computer Science");
student.introduce();
//# sourceMappingURL=index.js.map