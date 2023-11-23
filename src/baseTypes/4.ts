/*
  Як переписати його в TypeScript, використовуючи концепцію кортежів, 
  щоб гарантувати, що перший елемент завжди буде рядком, а другий числом?
*/

let person: [string, number];

person = ["Max", 21];

// METHOD_2
type PersonNew = [string, number];

let personNew: PersonNew = ["Max", 21];

export {};
