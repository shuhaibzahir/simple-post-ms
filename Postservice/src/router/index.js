const express = require("express")
const router = express.Router();
const {randomBytes} = require("crypto")
const posts = require("./constant")
const axios = require("axios")
router.post("/",(req,res)=>{
    const {title} = req.body
    const id = randomBytes(4).toString('hex');
    posts[id]={
        id,
        title
    }
    axios.post("http://localhost:3001/event",{"type":"postCreated",data:{id,title}})
    res.json(posts[id])
})

router.get("/",(req,res)=>{
    res.json(Object.values(posts))
})


module.exports = router;