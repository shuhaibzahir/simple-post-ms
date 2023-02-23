const express = require("express")
const axios = require("axios")
const router = express.Router();



router.post("/",(req,res)=>{
    const event = req.body;

    /* ------------------------------ post service ------------------------------ */
    axios.post("http://localhost:3002/event",event)

    /* ----------------------------- comment service ---------------------------- */
    axios.post("http://localhost:3003/event",event)
    
    /* ------------------------------ query service ----------------------------- */
    axios.post("http://localhost:3004/event",event)

    res.send({status:"ok"})

    
})


module.exports = router;
