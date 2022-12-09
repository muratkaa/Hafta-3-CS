const express =require('express');
const router2 = require('./logs');
const Coffee=require('../models/coffee');
const routerBuy=express.Router();

routerBuy.get('/:id',(req,res)=>{
  
  res.send(req.params.id);
})
/* if(req.body.name != null){
    res.coffee.name = req.body.name;
  }
  if(req.body.coffeeType != null){
    res.coffee.coffeeType = req.body.coffeeType;
  } */




module.exports=routerBuy;

