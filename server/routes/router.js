const express=require('express');
const route=express.Router();
const services=require('../services/render');
const controller=require('../controller/controller');
//root route
route.get('/',services.homeRoutes)
//add user route
route.get('/add-user',services.addUser)
//update user route
route.get('/update-user',services.updateUser)

//API routes
route.post('/api/users',controller.createUser);
route.get('/api/users',controller.findUser);

route.put('/api/users/:id',controller.updateUser);

route.delete('/api/users/:id',controller.deleteUser);

module.exports=route;