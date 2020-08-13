const express = require('express')
const app = express()
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const {MONGOURI} = require('./keys')
const PORT = process.env.PORT

dotenv.config({ path: './.env' });

mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected',()=>{
    console.log("Connected to MongoDB")
})
mongoose.connection.on('error',(err)=>{
    console.log("Error connecting",err)
})

require('./models/user')
require('./models/post')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))

app.listen(PORT, ()=>{
    console.log("Server is running on", PORT)
})

