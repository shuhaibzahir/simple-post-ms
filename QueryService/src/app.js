const express = require("express")
const app = express();
const cors = require("cors")
const QueryRouter = require("./router/index")
const EventRouter = require("./router/event")
const eventHandling = require("./router/eventHandling")
const axios = require("axios")
app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.use("/api/query",QueryRouter)
app.use("/event",EventRouter)

app.listen(3004,()=>{
    console.log("query service running on 3004")
    axios.get("http://localhost:3001/event").then(({data})=>{
        data.forEach(element => {
            const {type,data} =element
            eventHandling(type,data)
        });
    })
})