function includes(str){
    let result1 = str.includes("world"); 
    let result2 = str.includes("World"); 
    let result3 = str.includes("Hello", 1); 
    console.log(result1); // true
    console.log(result2); // false
    console.log(result3); // false
}
module.exports=includes;