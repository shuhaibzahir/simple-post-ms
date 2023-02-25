const express = require("express");
const router = express.Router();
const axios = require("axios")
router.post("/",(req,res)=>{
    const {type,data}= req.body
    if(type === "commentCreated"){
        const rejectedWord = "orange"
         data.status = data.content?.includes(rejectedWord) ? "rejected" :"approved"
         axios.post("http://localhost:3001/event",{type:"commentVerified",data})
    }
 
    res.send("ok")
})






module.exports = router;