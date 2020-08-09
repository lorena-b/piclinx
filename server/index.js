const express = require('express')
const app = express()
const dotenv = require('dotenv');

app.listen(process.env.PORT,()=>{
    console.log("Server is running on", PORT)
})