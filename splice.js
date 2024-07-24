const myFish = ["angel", "clown", "mandarin", "sturgeon"];
function splice(){
    //splice update the array and the retrun type is empty array
const itemadd = myFish.splice(2, 0, "drum");
console.log(itemadd);
console.log(myFish);//["angel", "clown","drum","mandarin", "sturgeon"];
}
module.exports=splice;
