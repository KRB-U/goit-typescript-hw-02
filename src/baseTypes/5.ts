/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

let union: string | number;
union = "string";
union = 1;

let literal: "enable" | "disable";
literal = "enable";
literal = "disable";

// METHOD_2
type UnionNew = string | number;
let value: UnionNew;
value = "string";
value = 1;

type LiteralNew = "enable" | "disable";
let enbOrDis: LiteralNew;
enbOrDis = "enable";
enbOrDis = "disable";
