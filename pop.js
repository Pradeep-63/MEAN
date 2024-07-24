let courses = ["HTML", "CSS", "Bootstrap", "NodeJs"]
// remove the element from the end of the array
function pop(){
    const pop=courses.pop()
    console.log(pop);
    console.log(courses)
}
module.exports=pop;
