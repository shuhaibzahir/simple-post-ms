const express = require("express")
const router = express.Router();
const {randomBytes} = require("crypto")
const posts ={}

router.post("/",(req,res)=>{
    const {title} = req.body
    const id = randomBytes(4).toString('hex');
    posts[id]={
        id,
        title
    }
    res.json(posts[id])
})

router.get("/",(req,res)=>{
    res.json({posts})
})


module.exports = router;