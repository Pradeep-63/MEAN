function auth(req,res){
    res.send(`hello ${req.body.username}`)
}
module.exports=auth;