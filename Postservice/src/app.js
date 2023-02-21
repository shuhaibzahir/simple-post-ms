const express = require("express")
const cors = require("cors")
const app = express();
const PostRouters = require("./router/index")

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use("/api/post",PostRouters)

app.listen(3002,()=>{
    console.log("post service running 3002")
})