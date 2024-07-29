function profileAuth(req,res){;
    res.send(`hello ${req.body.name} your emailid is ${req.body.email}`)
}
module.exports=profileAuth;