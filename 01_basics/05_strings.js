const name = "Shekhar"
const repoCount = 30

// console.log(name+repoCount+" Value"); // Outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // This is the best practice.

const gameNameOld = "Shekhar"
console.log(typeof gameNameOld) // This is string


const gameName= new String("Shekhar") 
console.log(typeof gameName) // This is object and will have several features

console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))

const newString = gameName.substring(0,4)
console.log(newString) // Shek

const anotherString = gameName.slice(-6, 4); 
console.log(anotherString)  // hek  // slice is similar to substring but slice can take negative index also

const newStringOne="    hoo    ";
console.log(newStringOne);
console.log(newStringOne.trim()); // trim() will ignore starting and end space

const url = "https://hshekhar102_github.com"
console.log(url)
console.log(url.replace('102', '101')); // replace 102 with 101

console.log(url.includes('hshekhar')) // true, it tell that url contains 'hshekhar' or not
console.log(url.includes('kanha')) 

const splitName = new String("h-shekhar-101")
let splitted= splitName.split('-');
console.log(splitted) // ['h', 'shekhar', '101']
console.log(typeof splitted) // Array Object
