function concat(str1,str2){
    console.log(str1.concat(' ', str2));
    console.log(str2.concat(', ', str1));
}
module.exports=concat;