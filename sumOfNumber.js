function sumOfNumber(num){
  num=+num;
  let number=num;
   let ans=0;
   while(number > 0){
     let rem=number%10;
     let div=number/10;
     div=Math.floor(div);
     ans=ans+rem;
     number=div;
   }
   return ans;
}
module.exports=sumOfNumber;