const express = require("express")
const cors = require("cors")
const app = express();
const PostRouters = require("./router/index")
const EventRouters = require("./router/event")
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use("/api/post",PostRouters)
app.use("/event",EventRouters)

app.listen(3002,()=>{
    console.log("post service running 3002")
})