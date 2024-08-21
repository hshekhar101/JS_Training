const course ={
    courseName : "js tutorial", 
    price : "999", 
    courseInstructor: "shekhar"
}

const {courseInstructor : instructor} = course; // destructuring
console.log(instructor);