require('dotenv').config()


const express = require('express');
const app = express();
const mongoose=require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect(process.env.DATABASE_URL);
const db= mongoose.connection;
db.on('error',()=>console.error(error));
db.once('open',()=>console.log("Connected to database."))

app.use(express.json());

const coffeesRouter=require('./routers/coffees');
app.use('/coffees',coffeesRouter);

const supplysRouter = require('./routers/supplys');
app.use('/supplys',supplysRouter);

const logsRouter = require('./routers/logs');
app.use('/logs',logsRouter);

const buyRouter = require('./routers/buy');
app.use('/buy',buyRouter);
//GET localhost:3000/coffee/query?coffeeType=latte&amount=1
app.listen(3000,()=>console.log("Server has started on port 3000."));

