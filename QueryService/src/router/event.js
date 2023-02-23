const express = require("express");
const PostAndComment = require("./constants")
const router = express.Router();


router.post("/",(req,res)=>{
    const {type,data}= req.body
    if(type === "postCreated"){
        PostAndComment[data.id] = {...data,comments:[]}
    }
    if(type === "commentCreated"){
        PostAndComment[data.postId].comments.push({id:data.id,content:data.content})
    }
    console.log(PostAndComment)
    res.send("ok")
})






module.exports = router;