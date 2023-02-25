import React, { useState } from 'react'
import { savePost } from '../api/postServices'

const PostCreate = ({setPost}) => {
    const [text,setText] = useState('');

    const submitPost = ()=>{
        savePost({title: text}).then(res=>{
            setPost(prev => [...prev,res.data])
            setText('')
        })
    };

  return (
    <div className='container'>
        <h2>Create Post</h2>
        <div className='create-post'>
        <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} />
        <button onClick={submitPost}>Submit</button>
    </div>
    </div>
  )
}

export default PostCreate