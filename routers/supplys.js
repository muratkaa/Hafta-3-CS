const express =require('express');
const router1=express.Router();
const Supply=require('../models/supply')

//GET ALL
router1.get('/',async (req,res)=>{
  try {
    const supplys = await Supply.find();
    res.json(supplys);
  } catch (error) {
    res.status(500).json({message:error.message});
  }
});

//CREATE
router1.post('/', async (req,res) => {
  const supply = new Supply({
    name: req.body.name,
    amount:req.body.amount
  })
  try {
    const newSupply = await supply.save();
    res.status(201).json(newSupply);
  } catch (error) {
    res.status(400).json({message:error.message});
  }
})

//UPDATE
router1.patch('/:id', getSupply, async (req,res) => {
  if(req.body.name != null){
    res.supply.name = req.body.name;
  }
  if(req.body.amount != null){
    res.coffee.amount = req.body.amount;
  }
  try {
    const updatedSupply = await res.supply.save();
    res.json(updatedSupply);
  } catch (error) {
    res.status(400).json({message:error.message});
  }
})

//DELETE
router1.delete('/:id', getSupply, async (req,res) => {
  try {
    await res.supply.remove();
    res.json({message:"Deleted supply."});
  } catch (error) {
    res.status(500).json({message:error.message});
  }
})


async function getSupply(req, res, next) {
  let supply;
  try {
    supply = await Supply.findById(req.params.id)
    if(supply == null){
      return res.status(404).json({message: 'Cannot find supply.'});
    }
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
  res.supply = supply;
  next();
}


module.exports=router1;
