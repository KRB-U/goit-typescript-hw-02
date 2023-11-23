/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T, K>(objA: T, objB: K): T & K {
  return { ...objA, ...objB };
}

export {};
