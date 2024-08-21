const mySym= Symbol("key1")

const jsUser = {
    name: "Shekhar",
    "fullName": "Himanshu Shekhar", 
    [mySym]:"mykey1", // way to write symbol as a key
    age: 22, 
    isLoggedIn: false, 
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(jsUser.name) // Method 1
console.log(jsUser["name"]) // Method 2 preferrable
console.log(jsUser[mySym])

// we can't access jsUser.fullName in the above object
// So, it's better to use jsUser["fullName"]