const express = require("express")
const router = express.Router()
const commentsByPost = require("./constants")

router.post("/",(req,res)=>{
    const {type,data} = req.body;
    if(type === "postCreated"){
        commentsByPost[data.id]=[]
    }
 
})


module.exports = router