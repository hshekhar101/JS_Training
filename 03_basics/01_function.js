function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    console.log("U");
}

sayMyName();

// function contains parameters
function addTwoNumbers(num1, num2){
    // console.log(num1+num2)
    let result = num1+num2;
    return result;
}

// when this function is called, we pass parameters
const result = addTwoNumbers(4,5);
console.log(result);


function loginUserMessage(userName){
    if(!userName){
        console.log("Please enter a username");
        return
    }
    return `${userName} just logged in`
}

console.log(loginUserMessage("Shekhar"))


function calculateCartPrice(val1, val2, ...num1){ // rest operator here else it is spread operator
    return num1;
}
console.log(calculateCartPrice(100, 105, 200, 300, 400, 500));

const user = {
    username:"Shekhar", 
    price:299
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user);

