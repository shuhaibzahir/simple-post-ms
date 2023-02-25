import React, { useState } from 'react'
import { saveComment } from '../api/commentService'

const CommentCreate = ({post, setComments}) => {
    const [text,setText] =useState('')
    const postComment = ()=>{
        saveComment(post.id, {content:text}).then(res=>{
            setComments(prev => [...prev,res.data])
            setText('')
        })
    }
  return (
    <div>
        <input type="text" value={text}  onChange={(e)=>{setText(e.target.value)}}/>
        <button onClick={()=>{postComment();}}>Add comment</button>
    </div>
  )
}

export default CommentCreate