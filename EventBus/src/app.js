const express = require("express")
const app = express();
const cors = require("cors")
const evnetBusRouter = require("./router/index")

app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.use("/event",evnetBusRouter)


app.listen(3001,()=>{
    console.log("event bus running on 3001")
})