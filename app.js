const express = require('express')  //Importing the library
const app = express()  //Create a express app

const mongoose = require('mongoose')
const bodyParser = require('body-parser') //To pass the data as json
require('dotenv/config')

const postRoute = require('./routes/posts') 
const authRoute = require('./routes/auth')

app.use(bodyParser.json())
app.use('/api/posts',postRoute)
app.use('/api/user',authRoute)


//Check if everythig is working
app.get('/',(req,res)=>{
    res.send('Piazza System Homepage')
})



//CONNECT to MongoDB
mongoose.connect(process.env.DB_CONNECTOR).then(()=>{
    console.log('Your mongoDB connector is on...')
})

//The server will listen at port 3000 and send a message
app.listen(3000, ()=>{
    console.log('Server is up and running...')
})