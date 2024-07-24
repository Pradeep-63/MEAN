const array1 = [1, 2, 3];
const pets = ['cat', 'dog', 'bat'];
function includes(){
    console.log(array1.includes(2));
    console.log(pets.includes('cat'));//true
    console.log(pets.includes('at'));//false
}
module.exports=includes;
