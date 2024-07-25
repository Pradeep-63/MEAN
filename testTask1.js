function testTask1(cartWeight, totalPrice, discountType){
  const DiscountType = {
    Standard: "Standard",
    Seasonal: "Seasonal",
    Weight: "Weight"
  };
  const DiscountPercentage={
    Standard: 20,
    Seasonal: 30,
    cartWeight: function cartItem(items){
        if(items>10){
          return 10;
        }
        else if(items>5){
          return 5;
        }
        else{
           return 2;
        }
      }
  }
  function getDiscountedPrice() {
    let discountamount=0;
    let amountAfterDiscount=0;
    if(discountType==="Standard"){
        discountamount=(totalPrice/100)*DiscountPercentage.Standard;
        amountAfterDiscount=totalPrice-discountamount;
    }
    else if(discountType==="Seasonal"){
        discountamount=(totalPrice/100)*DiscountPercentage.Seasonal;
        amountAfterDiscount=totalPrice-discountamount;
    }
    else{
        discountamount=(totalPrice/100)*DiscountPercentage.cartWeight(cartWeight);
        amountAfterDiscount=totalPrice-discountamount;
    }
    return amountAfterDiscount;
  }
  const ans=getDiscountedPrice();
  return ans;
  
// console.log(getDiscountedPrice(12, 1200, DiscountType.Weight));
 
    
}
module.exports=testTask1;
