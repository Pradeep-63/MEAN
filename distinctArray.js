function distictArray(arrayofobj){
    let arr1=new Array();
    let arr2=new Array();
    arrayofobj.forEach((element) => {
      if(!arr1.includes(element.type)){
            arr1.push(element.type);
        }
      if(!arr2.includes(element.name)){
          arr2.push(element.name);
       }
    });
    console.log(arr1);
    console.log(arr2);
  }
  module.exports=distictArray;