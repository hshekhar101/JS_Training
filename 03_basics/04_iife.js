// IIFE, Immediately Invoked Function Expression

// ()() // first () for writing the function and second () for execution of that function

(function chai(){
    console.log(`DB connected`)
})(); // semicolon is necessary to declare that IIFE is ended.

((name)=>{
    console.log(`DB connected two successfully, ${name}`)
})('shekhar');



