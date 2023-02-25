const express = require("express")
const app = express();
const cors = require("cors")

const EventRouter = require("./event")
app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(express.json())

 
app.use("/event",EventRouter)

app.listen(3005,()=>{
    console.log("moduration service running on 3005")
})