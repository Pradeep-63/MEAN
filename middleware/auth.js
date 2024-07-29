function auth(req,res,next){ 
    const {username}=req.body;
    if(!username){
        return res.status(401).send("username is required")
    }

   next();
}
module.exports=auth;