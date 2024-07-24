function distictArray(arrayofobj){
    let flowers=new Array();
    let fruits=new Array();
    arrayofobj.forEach((element) => {
     if(element.type === "flower"){
      if(!flowers.includes(element.name)){
        
        flowers.push(element.name);
       }
     }
     else{
      if(!fruits.includes(element.name)){
        fruits.push(element.name);
      }
     }
      
      
    });
    console.log(flowers);
    console.log(fruits);
  }
  module.exports=distictArray;