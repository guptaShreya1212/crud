var userdb=require('../model/model');
//create and save new user
exports.createUser=(req,res)=>{
//validate request
if(!req.body){
    res.status(400).send({message:"form can not be empty"});
    return;
}
const data=req.body;
const user=new userdb(data);
   
//save user in db
user.save()
.then(()=>{
    // res.status(201).send({message:"data saved"});
    res.redirect('/add-user');
})
.catch((err)=>{
    res.status(500).send(err.message||"something went wrong");
})   
}


//retrieve and return all users /retrive and return a single user
exports.findUser=(req,res)=>{
const id=req.query.id;   
if(id){
userdb.findById(id)
.then(data =>{
if(!data){
    res.status(404).send("user not found with id"+id);
}else{
    res.status(200).send(data);
}
})
.catch(() =>{
    res.status(500).send("error in finding");
})
}
else{
    userdb.find()
    .then((user)=>{
    res.send(user);
})
.catch(()=>{
    res.status(500).send("user not found");
})}



}




//update user by user id
exports.updateUser=(req,res)=>{
if(!req.body){
    res.status(400).send("data to be updat can not be empty");
}
const id=req.params.id;
// Update the user in the database
userdb.findByIdAndUpdate(id,req.body,{new:true})
.then((data)=>{
     // Check if the user was found and updated
    if(!data){
        res.status(404).send({message:`can not update user with ${id},maybe user not found`})
    }else{
        // Send the updated user data as the response
        res.redirect('/');
    }
})
.catch(err=>{
      // Handle errors
    res.status(500).send({message:'Something went wrong'});
})
}







//delete user by user id
exports.deleteUser=(req,res)=>{
const id=req.params.id;
userdb.findByIdAndDelete(id)
.then(data =>{
    if(!data){
        res.status(404).send("user no found with id"+id);
    }
    else{
        res.send("user was deleted successfully");
    }
})
.catch(err=>{
    res.status(500).send("user could not deleted with id"+id);
})
}