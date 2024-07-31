import fs from 'fs'
export async function getAllUser(req,res){
    fs.readFile("db.json", function(err, data) { 
        // Check for errors 
        if (err) throw err; 
        // Converting to JSON 
        const users = JSON.parse(data);
        if(users){
            res.status(200).json({
                success:true,
                data:users.users,
                message:"fetched all users"
            })
        }
        else{
            res.status(404).json({
                success:false,
                message:"users not found"
            })

        }
       
    
    }); 
    
}
export async function getUserById(req,res){
    fs.readFile("db.json", function(err, data) {  
        // Check for errors 
        if (err) throw err; 
        // Converting to JSON 
        const users = JSON.parse(data);
        //res.send(users.users.find(obj=>obj.id==req.params.id))
        let user=users.users.find(obj=>obj.id==req.params.id)
        if(user){
            res.status(200).json({
                success:true,
                data:user,
                message:"user fetched succesfully"
            })
        }
        else{
            res.status(404).json({
                success:false,
                message:"users not found"
            })
        }
    }); 
    

}

export async function setUser(req,res){ 
    fs.readFile("db.json", function(err, data) { 
    
        // Check for errors 
        if (err) throw err; 
        // Converting to JSON 
        let users = JSON.parse(data);
        let length=users.users.length;
        let idTrack;
        if(length==0){
            idTrack=length;

        }
        else{
            idTrack=users.users[length-1].id;
        }
        let newUserData;
        if(req.body.firstName && req.body.lastName && req.body.email && req.body.phoneNumber){
             newUserData={
                "id":idTrack+1,
                "firstName":req.body.firstName,
                "lastName":req.body.lastName,
                "email":req.body.email,
                "phoneNumber":req.body.phoneNumber
            }

        }
        else{
            return res.status(400).json({
                success:false,
                message:"please fill all the field"
            })
        }
        
        users.users.push(newUserData);
        fs.writeFile("db.json",JSON.stringify(users),function(err){
            if (err) throw err;
            console.log('Updated!');
        })
            res.status(200).json({
            success:true,
            data:users,
            message:"user created succesfully"
         })
         
    }); 
      
}
export async function updateUserById(req,res){

    let newUserData={
        "id":req.params.id,
        "firstName":req.body.firstName,
        "lastName":req.body.lastName,
        "email":req.body.email,
        "phoneNumber":req.body.phoneNumber
    }
    fs.readFile("db.json", function(err, data) { 
        // Check for errors 
        if (err) throw err; 
        // Converting to JSON 
        const users = JSON.parse(data);
        const index=users.users.findIndex((data)=>data.id==req.params.id)
        if(index !== -1){
            users.users[index]=newUserData
        fs.writeFile("db.json",JSON.stringify(users),function(err){
            if (err) throw err;
            console.log('updated!');
        })
        res.status(200).json({
            success:true,
            data:users,
            message:"user updated succesfully"
        })
        }
        else{
            res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        
    }); 
    

}
export async function deleteUserById(req,res){

    fs.readFile("db.json", function(err, data) { 
    
        // Check for errors 
        if (err) throw err; 
        // Converting to JSON 
        const users = JSON.parse(data);
        const index=users.users.findIndex((data)=>data.id==req.params.id)
        if(index !== -1){
            users.users.splice(index,1);
        fs.writeFile("db.json",JSON.stringify(users),function(err){
            if (err) throw err;
            console.log('deleted!');
        })
        res.status(200).json({
            success:true,
            data:users,
            message:"user deleted succesfully"
        })
        }
        else{
            res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        
    }); 
    

}