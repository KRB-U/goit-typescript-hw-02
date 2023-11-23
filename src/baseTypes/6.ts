/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

function showMessage(message: string): void {
  // f нічого не повертає - void(порожнеча)
  console.log(message);
}

function calc(num1: number, num2: number): number {
  // f повертає число - number
  return num1 + num2;
}

function customError(): never {
  // f ніколи не закінчується і ніколи не повертає значення - never
  throw new Error("Error");
}

export {};
