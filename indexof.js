function IndexOf(str){
    let result1 = str.indexOf("world");
    let result2 = str.indexOf("World"); 
    let result3 = str.indexOf("o", 5);  
    console.log(result1); // 7
    console.log(result2); // -1
    console.log(result3); // 8    
}
module.exports=IndexOf;