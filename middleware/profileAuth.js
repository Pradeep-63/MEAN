function profileAuth(req,res,next){
    const{name,email}=req.body;
    if(!name || !email) return res.status(401).send("profile can't be empty");
    next();
}
module.exports=profileAuth