const PostAndComment = require("./constants")
const eventHandling = (type,data)=>{
    if(type === "postCreated"){
        PostAndComment[data.id] = {...data,comments:[]}
    }
    if(type === "commentCreated"){
        PostAndComment[data.postId].comments.push({id:data.id,content:data.content, status:"pending"})
    }
    if(type === "commentVerified"){
        const comments =  PostAndComment[data.postId].comments
        const comment = comments.find(i => i.id === data.id)
        if (comment){
         comment.status  = data.status
        }
     }
}

module.exports = eventHandling