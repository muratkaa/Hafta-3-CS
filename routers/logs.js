const express =require('express');
const router2=express.Router();
const buy=require('../models/log');

router2.get('/', async (req,res) => {
  try {
    const logs = await Log.find();
    res.json(logs);
  } catch (error) {
    res.status(500).json({message:error.message});
  }
})

router2.post('/', async (req,res) => {
  const log = new Log({
    action: req.body.action,
    type: req.body.type,
    amount:req.body.amount,
    date:req.body.date
  })
  try {
    const newLog = await log.save();
    res.status(201).json(newLog);
  } catch (error) {
    res.status(400).json({message:error.message});
  }
})

router2.delete('/:id', getLog, async (req,res) => {
  try {
    await res.log.remove();
    res.json({message:"Deleted log."});
  } catch (error) {
    res.status(500).json({message:error.message});
  }
})


async function getLog(req, res, next) {
  let log;
  try {
    log = await Log.findById(req.params.id)
    if(log == null){
      return res.status(404).json({message: 'Cannot find the log.'});
    }
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
  res.log = log;
  next();
}




module.exports=router2
 