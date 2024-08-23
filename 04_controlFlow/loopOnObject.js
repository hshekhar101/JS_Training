// loop on object

const myObj ={
    js:"javascript", 
    py: "python", 
    cpp: "C++", 
    rb:"ruby",
    swift:"swift in apple"
}

// using "in"
for(const key in myObj){
    // console.log(`${key} is shortcut for ${myObj[key]}`)
}

const arr=["js", "py", "cpp", "rb", "swift"]
for(const key in arr){
    // console.log(`${key} is actually index and the value at this index is ${arr[key]}`)
}

// ****************** IMPORTANT LOOP *************************
const coding = ["js", "py", "cpp", "rb", "swift"]

// Use callback function
coding.forEach((item)=>{
    // console.log(item);
})

const myCoding = [
    {
        languageName :"python", 
        fileName:"py"
    },
    {
        languageName :"javascript", 
        fileName:"js"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})
