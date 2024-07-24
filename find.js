const array1 = [5, 12, 8, 130, 44]; 
function find(){
    const found = array1.find((element) => element > 10);
    console.log(found);
}
module.exports=find;