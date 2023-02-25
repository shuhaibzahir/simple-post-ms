const express = require("express")
const router = express.Router();
const {randomBytes} = require("crypto")
const commentsByPost = require("./constants")
const axios = require("axios")
router.post("/:id",(req,res)=>{
    const {content} = req.body
    const {id} = req.params;
    const newComment = {
        id:randomBytes(4).toString('hex'),
        content,
    };
    const comments =  commentsByPost[id] || []
    comments.push(newComment) 
    commentsByPost[id] = comments
    axios.post("http://localhost:3001/event",{type:"commentCreated",data:{postId:id,...newComment}})
    res.status(201).json({...newComment,status:"pending"})
})

router.get("/:id",(req,res)=>{
    const {id}  = req.params;
    res.json(commentsByPost[id]||[])
})


module.exports = router;