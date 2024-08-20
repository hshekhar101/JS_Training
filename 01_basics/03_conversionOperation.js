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

// ****************************** Operations ***************************


console.log(2+2)
console.log(2*2)
console.log(2**3) // 2^3
console.log(2/2)
console.log(1+"2" + 3) //  123
console.log("1"+2) // 12
console.log("1" + 2+ 2) // 122
console.log(1+3+"4")  // 44


console.log("2"==2) // true, because conversion will happen automatically
console.log("2"===2) // false, strict checking with it's data types occur




