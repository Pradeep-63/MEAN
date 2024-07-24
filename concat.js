let course1 = ["HTML", "CSS", "Bootstrap", "NodeJs"]
let course2=["C", "C++", "Java", "Python"]
//merge two array into a single array
function concat(){
    let courses=course1.concat(course2);
    console.log(courses)   
}
module.exports=concat;  