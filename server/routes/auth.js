const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.send('Check')
})

router.post('/signup', (req,res)=>{

    const{name,email,password} = req.body
    if (!email || !password || !name) {
        return res.status(422).json({error: "Please fill all of the required fields."})
    }
    res.json({message:"Registration Successful"})

})

module.exports = router 
