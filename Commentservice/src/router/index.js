const express = require("express")
const router = express.Router();
const {randomBytes} = require("crypto")
const comments = {}

router.post("/",(req,res)=>{
    const {id,comment} = req.body
    const newComment = {
        id:randomBytes(4).toString('hex'),
        comment
    };
    comment[id] = 
    res.json(newPost)
})

router.get("/:id",(req,res)=>{
    const {id}  = req.params;
    res.json({comments: comments[id]})
})


module.exports = router;