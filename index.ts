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
function merge<T, K>(objA: T, objB: K): T & K {
  return { ...objA, ...objB };
}

console.log(merge({ a: 1, b: 2 }, { b: 4, c: 5 }));

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
