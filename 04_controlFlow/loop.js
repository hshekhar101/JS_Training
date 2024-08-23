const arr=[1, 2, 3, 4, 5]
for(const i of arr){
    // console.log(i)
}

const greetings = "Hello World"
for(const greet of greetings){
    // console.log(`Each char is ${greet}`)
}

// Maps
const map = new Map(); 
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");
map.set("IN", "India");

// console.log(map);

for(const [key, value] of map){
    console.log(key, ':-', value);
}

// Map is iterable but object is not iterable
const myObj={
    name: "Shekhar", 
    age : 22, 
    email : "h.shekhar@gmail.com"
}
for(const [key, value] of myObj){
    console.log(key, " ", value) // object is not iterable
}



