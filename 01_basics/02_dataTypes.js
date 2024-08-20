"use strict"  // treat all JS code as newer version


// number => 2 to power of 53
// bigint
// string = ""
// boolean = true/false
// null = standalone value
// undefined => 
// symbol = unique

let name = "Shekhar"
let age = 10
let isLoggedIn=false
console.log([typeof name, typeof age, typeof isLoggedIn])

console.log(typeof undefined)
console.log(typeof null) // Object

const id = Symbol("234")
const newId = Symbol("234")
console.log(id)
console.log(newId)
console.log(typeof(id))
console.log(id==newId)

// Primitive data types // stack memory
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference (Non Primitive data types) // Heap memory
// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name :"Shekhar", 
    age : 22
}

const myFunction = function(){
    console.log("this is function")
}

console.log(typeof heroes); // object
console.log(typeof myObj) // object 
console.log(typeof myFunction) // object function