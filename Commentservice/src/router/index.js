const express = require("express")
const router = express.Router();
const {randomBytes} = require("crypto")
const commentsByPost = {}

router.post("/:id",(req,res)=>{
    const {content} = req.body
    const {id} = req.params;
    const newComment = {
        id:randomBytes(4).toString('hex'),
        content
    };
    const comments =  commentsByPost[id] || []
    comments.push(newComment) 
    commentsByPost[id] = comments
    res.status(201).json(newComment)
})

router.get("/:id",(req,res)=>{
    const {id}  = req.params;
    res.json(commentsByPost[id]||[])
})


module.exports = router;