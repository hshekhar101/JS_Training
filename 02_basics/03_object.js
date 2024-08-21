const obj1 = {
    1 : "a", 
    2 : "b", 
    3 : "c"
}

const obj2 ={4:"d", 5:"e", 6:"f"}
const obj3 ={7:"g", 8:"h", 9:"i"}

const AllObj={...obj1, ...obj2, ...obj3}
console.log(AllObj);

console.log(Object.keys(AllObj)) // It will print an array which contains only keys
console.log(Object.values(AllObj));
console.log(Object.entries(AllObj))