const express = require("express");
const eventHandling = require("./eventHandling")
const router = express.Router();


router.post("/",(req,res)=>{
    const {type,data}= req.body
    eventHandling(type,data)
    res.send("ok")
})






module.exports = router;