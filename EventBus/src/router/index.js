const express = require("express")
const axios = require("axios")
const router = express.Router();

const events = []

router.post("/",(req,res)=>{
    const event = req.body;
    events.push(event)
    /* ------------------------------ post service ------------------------------ */
    axios.post("http://localhost:3002/event",event)

    /* ----------------------------- comment service ---------------------------- */
    axios.post("http://localhost:3003/event",event)
    
    /* ------------------------------ query service ----------------------------- */
    axios.post("http://localhost:3004/event",event)

    /* --------------------------- moduration service --------------------------- */
    axios.post("http://localhost:3005/event",event)


    res.send({status:"ok"})

    
})

router.get("/",(req,res)=>{
    res.json(events)
})


module.exports = router;
