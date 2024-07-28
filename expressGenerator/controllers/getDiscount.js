function getDiscountPrice(req,res){
    const {cartWeight, totalPrice, discountType}=req.body;
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
      if(discountType===DiscountType.Standard){
          discountamount=(totalPrice/100)*DiscountPercentage.Standard;
          amountAfterDiscount=totalPrice-discountamount;
      }
      else if(discountType===DiscountType.Seasonal){
          discountamount=(totalPrice/100)*DiscountPercentage.Seasonal;
          amountAfterDiscount=totalPrice-discountamount;
      }
      else{
          discountamount=(totalPrice/100)*DiscountPercentage.cartWeight(cartWeight);
          amountAfterDiscount=totalPrice-discountamount;
      }
      return {amountAfterDiscount,discountamount};
    }
    const response=getDiscountedPrice();
    console.log(response);
    res.status(200).json(
      {
         success:true,
         data:response,
         message:"Discounted amount fetched succesfully"
      }
     
     );
  
      
}
module.exports=getDiscountPrice