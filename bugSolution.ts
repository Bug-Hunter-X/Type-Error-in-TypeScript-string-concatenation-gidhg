function combineStrings(str1: string, str2: string): string {
  return str1 + str2; 
}

function combineStringsSafe(str1: string | number, str2: string | number): string {
  return `${str1}${str2}`;
}

let combined = combineStringsSafe(123, "abc"); //Correct
console.log(combined); //Output: 123abc
let combined2 = combineStringsSafe("123", "abc"); //Correct
console.log(combined2); //Output: 123abc

//Alternative solution using type guards and type assertion
function isString(value: any): value is string {
  return typeof value === 'string';
}

function combineStringsWithGuard(str1: string | number, str2: string | number): string {
    let str1_ = isString(str1) ? str1 : str1.toString();
    let str2_ = isString(str2) ? str2 : str2.toString();
  return str1_ + str2_; 
}
let combined3 = combineStringsWithGuard(123, "abc"); //Correct
console.log(combined3); //Output: 123abc