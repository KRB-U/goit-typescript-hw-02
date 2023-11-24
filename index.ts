type Weekdays = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
type Weekend = "Sat" | "Sun";

type AllWeekDays = Weekdays | Weekend;

function isWeekendNow(day: AllWeekDays): boolean {
  const IsDayOff: Record<Weekend, true> = {
    Sat: true,
    Sun: true,
  };
  return IsDayOff.hasOwnProperty(day);
}

// console.log(isWeekendNow("Sat"));

function firstArrayNumbers(arr: number[]): number {
  return arr[0];
}

let numbers = [65, 34, 54, 6423, 45];
let firstNum = firstArrayNumbers(numbers);

let tupleAdv: [number, string, boolean];

tupleAdv = [1, "two", true];

const arr: Readonly<number[]> = [2, 34, 5, 56, 7, 5];
// arr.push(3);

enum Codes {
  DATA = 4,
  VALUE = 2,
}

function declaration(status: Codes): number {
  return status;
}

console.log(declaration(Codes.VALUE));

const enum HttpCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
}

const status2 = HttpCodes.OK;

let anyType: string | number | boolean;

function randName(num: string | number, str: number | string) {}

type Dog = {
  legs: 4;
  bark: () => void;
};

type Fish = {
  fins: 2;
  swim: () => void;
};

let pet: Dog | Fish;

function isDog(pet: Dog | Fish): pet is Dog {
  if (isDog(pet)) {
    pet.bark();
  }
  return "bark" in pet;
}
// *****************

type User = {
  id: number;
  name: string;
};

const getUserNames = (users: User[]): string[] => {
  return users.map((user) => user.name);
};

const users: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

let res = getUserNames(users);
console.log(res);

// 2
type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type carDescr = keyof AllType;

function compare<T extends AllType, U extends AllType>(
  top: Pick<T, carDescr>,
  bottom: Pick<U, carDescr>
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

console.log(
  compare(
    {
      name: "mago",
      position: 1,
      color: "white",
      weight: 1500,
    },
    {
      name: "Ajax",
      position: 2,
      color: "Black",
      weight: 1600,
    }
  )
);

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);
// console.log(returnedTarget);

// 3
// function merge<T, K>(objA: T, objB: K): T & K {
//   return { ...objA, ...objB };
// }

// console.log(merge({ a: 1, b: 2 }, { b: 4, c: 5 }));

// 4

interface Props {
  title: string;
}

class Component<T extends Props> {
  constructor(public props: T) {}
}

class Page extends Component<Props> {
  pageInfo() {
    console.log(this.props.title);
  }
}

// 5

interface KeyValuePair<Key, Value> {
  key: Key;
  value: Value;
}

const pairKeyValue: KeyValuePair<string, number> = {
  key: "mango",
  value: 22,
};

console.log(pairKeyValue);

// 7
export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

// Замініть наступний код на версію за допомогою Record
type RoleDescr = Record<UserRole, string>;

const RoleDescription: RoleDescr = {
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
// *************
// type AdminType = {
//   type: "admin";
//   name: string;
//   privileges: string[];
// };

// type UserType = {
//   type: "user";
//   name: string;
//   registrationDate: Date;
// };

// function checkUser(name: string, type: "user"): UserType;
// function checkUser(
//   name: string,
//   type: "admin",
//   privileges: string[]
// ): AdminType;
// function checkUser(
//   name: string,
//   type: "admin" | "user",
//   privilegesOrRegistrationDate?: string[]
// ): AdminType | UserType {
//   if (type === "admin") {
//     return {
//       type,
//       name,
//       privileges: privilegesOrRegistrationDate as string[],
//     };
//   }

//   return {
//     type,
//     name,
//     registrationDate: new Date(),
//   };
// }

// const user = checkUser("Nikita", "user");
// const admin = checkUser("Tonya", "admin", ["manageUsers", "deletePosts"]);
// // console.log(admin);
// **********
// let arr6: Array<string | number> = [];

// arr6 = ["sgdshmj", "dgfdfg", 345];
// **********
// const promise: Promise<string> = new Promise((resolve) => {
//   setInterval(() => {
//     resolve("Done!");
//   }, 1000);
// });

// promise.then((data) => {
//   console.log(data);
// });

// ****************
// function dataView<T>(arg: T): T {
//   return arg;
// }

// let result = dataView<string>("gsfsvbg");
// console.log(result);
// let result2 = dataView(556);
// console.log(typeof result2);

// function firtArrElem<T>(arr: T[]): T {
//   return arr[0];
// }

// let numbers4 = [1, 2, 3, 4, 5];
// let firstNum3 = firtArrElem(numbers4);
// console.log(firstNum3);

// let strings4 = ["a", "b", "c", "d"];
// let firstStr3 = firtArrElem(strings4);
// console.log(firstStr3);

// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }

// const merged = merge({ name: "Alisa" }, { age: 28 }) as {
//   name: string;
//   age: number;
// };
// merged.name;

// function merge<T, U>(objA: T, objB: U) {
//   // return { ...objA, ...objB };
//   return Object.assign({}, objA, objB);
// }

// const merged = merge({ name: "Alisa" }, { age: 28 });
// console.log(merged);

// type PersonName = {
//   name: string;
// };

// type PersonAge = {
//   age: number;
// };

// function merge<PersonName, PersonAge>(objA: PersonName, objB: PersonAge) {
//   return { ...objA, ...objB };
// }
// const merged = merge<PersonName, PersonAge>({ name: "Alisa" }, { age: 28 });

// console.log(merged);

// type Person = {
//   name: string;
//   age: number;
//   location: string;
// };

// type PersonKeys = keyof Person; // 'name' | 'age' | 'location'

// function getPersonInfo(person: Person, key: PersonKeys) {
//   return person[key];
// }

// const john: Person = {
//   name: "John",
//   age: 25,
//   location: "NY",
// };

// console.log(getPersonInfo(john, "age")); // 25
// console.log(getPersonInfo(john, "name")); // 'John'
// console.log(getPersonInfo(john, "job")); // Error: Argument of type '"job"' is not assignable to parameter of type 'PersonKeys'.

// keyof
// function getProperty<T, K extends keyof T>(obj: T, key: K) {
//   return obj[key];
// }
