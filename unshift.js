let courses = ["HTML", "CSS", "Bootstrap", "NodeJs"]
function unshift(){
     //add the element at the begining of the array
     const unshift=courses.unshift("C++");
    console.log(unshift);
    console.log(courses)//op-["C++","HTML", "CSS","Bootstrap", "NodeJs"]
}
module.exports=unshift;
