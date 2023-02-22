const express = require("express")
const cors = require("cors")
const app = express();
const CommentRouter = require("./router/index")
const EventRouter = require("./router/event")
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use("/api/comment",CommentRouter)
app.use("/event",EventRouter)

app.listen(3003,()=>{
    console.log("comment service running 3003")
})