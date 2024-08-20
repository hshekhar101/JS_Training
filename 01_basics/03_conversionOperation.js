let score = "19"
console.log(score); // "19"

console.log(typeof score); // string

let scoreInNumber = Number( score); // string is converted to number
console.log(scoreInNumber) // 19
console.log(typeof scoreInNumber) // number


// "19" = 19
// "19abc" = NaN (Not a Number)
// true = 1; false = 0

let isLoggedIn=1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // true

// 0 = false // 1 = true
// "" = false
// "abc" = true

let someNumber= 19;
let stringNumber= String(someNumber)
console.log(stringNumber) // "19"
console.log(typeof stringNumber); // string