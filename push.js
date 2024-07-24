let courses = ["HTML", "CSS", "Bootstrap", "NodeJs"];
function push(){
    courses.push("javascript");
    const push=courses.push("ExpressJs","Mongodb");
    console.log(push);
    console.log(courses)
}
module.exports=push;
