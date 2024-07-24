let courses = ["HTML", "CSS", "Bootstrap", "NodeJs"]
 //remove the element from the begining of the array
 function shift(){
    const shift=courses.shift();
    console.log(shift);
   console.log(courses)//op-["CSS", "Bootstrap", "NodeJs"]
 }
 module.exports=shift;
       