const user ={
    username:"Shekhar", 
    price: 999, 
    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to website`)
        console.log(this) // The current context will be printed.
    }
}

user.welcomeMessage()

console.log(this) // empty object, but in browser "window" object will be the global context.

function check(){
    // console.log(this)
}
check();


// ********************** Arrow Function **********************

const fun1 = function (){
    console.log("This is function 1")
    console.log(this)
}
fun1();

const fun2 = ()=>{
    console.log("This is function 2")
    console.log(this) // {} can't use "this" keyword in arrow function
}
fun2();

const addThree=(num1, num2, num3)=>{
    return num1+num2+num3;
}

// OR
//const addThree2 = (num1, num2, num3)=>(num1+num2+num3)
console.log(1,2,3);
 