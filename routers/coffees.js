const express =require('express');
const router=express.Router();
const Coffee=require('../models/coffee');




//GETTING ALL
router.get('/', async (req,res) => {
    try {
      const coffees = await Coffee.find();
      res.json(coffees);
    } catch (error) {
      res.status(500).json({message:error.message});
    }
  })

//GETTING ONE
router.get('/:id',(req,res)=>{
    res.send(req.params.coffeeType);
})


//CREATING ONE
router.post('/', async (req,res) => {
    const coffee = new Coffee({
      name: req.body.name,
      coffeeType: req.body.coffeeType
    })
    try {
      const newCoffee = await coffee.save();
      res.status(201).json(newCoffee);
    } catch (error) {
      res.status(400).json({message:error.message});
    }
  })

//UPDATING ONE
//UPDATING ONE
router.patch('/:id', getCoffee, async (req,res) => {
    if(req.body.name != null){
      res.coffee.name = req.body.name;
    }
    if(req.body.coffeeType != null){
      res.coffee.coffeeType = req.body.coffeeType;
    }
    try {
      const updatedCoffee = await res.coffee.save();
      res.json(updatedCoffee);
    } catch (error) {
      res.status(400).json({message:error.message});
    }
  })
//DELETING ONE
//DELETING ONE
router.delete('/:id', getCoffee, async (req,res) => {
    try {
      await res.coffee.remove();
      res.json({message:"Deleted coffee."});
    } catch (error) {
      res.status(500).json({message:error.message});
    }
  })

async function getCoffee(req, res, next) {
    let coffee;
    try {
      coffee = await Coffee.findById(req.params.id)
      if(coffee == null){
        return res.status(404).json({message: 'Cannot find coffee.'});
      }
    } catch (error) {
      return res.status(500).json({message: error.message});
    }
    res.coffee = coffee;
    next();
  }

module.exports=router;