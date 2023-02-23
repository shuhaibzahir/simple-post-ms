const express = require("express")
const router = express.Router();
const PostAndComments = require("./constants")
router.get('/',(req,res)=>{
    res.status(200).json(Object.values(PostAndComments))
})


module.exports = router;
