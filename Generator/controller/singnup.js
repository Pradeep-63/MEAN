function SignUp(req,res){
    console.log('test2  ')
    const {username,email,password}=req.body;
     //name validation 
    const usernameRegex=/^[A-Za-z]+$/;
 
    if(username===""){
        return res.status(404).json({
            status:400,
            message:"name can't be empty"
        })
    }
    else if(!username.match(usernameRegex)){
         res.status(404).json({
            status:400,
            message:"name can't be digit,special character and space"
        })
           
    }
    
    //email validation
    if(email===""){
        res.status(404).json({
            success:true,
            message:"email can't be empty"
        })
    }
    else if(!email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)){
        return res.status(404).json({
            success:false,
            message:"please enter a valid email format"
        })
    }
   
    //password validation
    if(password===""){
        return res.status(404).json({
            success:false,
            message:"password can't be empty"
        })
    }
    else if(password.length<5){
        return res.status(404).json({
            success:false,
            message:"password length must be greater tha 5 character"
        })
    
    }
    else if(password.length>20){
        return res.status(404).json({
            success:false,
            message:"password can't be greater than 20 character"
        })
    }

    return res.status(200).json({
        success:true,
        message:"signup successfully"
    })
}
module.exports=SignUp