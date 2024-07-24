const arr=[1,2,3,4,5];
function findIndex(){
    const element=arr.findIndex((el)=>el>2)
    console.log(element);  
}
module.exports=findIndex;
