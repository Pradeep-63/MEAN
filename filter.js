const ages = [32,33,18,16,11,17,40,42];

function filter(){
    const result = ages.filter((age)=>{
        if(age>=18){
           return age;
          }
        });
        console.log(result);
}
module.exports=filter;

