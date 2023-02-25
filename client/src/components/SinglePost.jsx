import React, {  useState } from 'react'

import CommentCreate from './CommentCreate'
import CommentList from './CommentList'
const SinglePost = ({post}) => {
    const [comments,setComments] = useState(post.comments || [])
 
  return (
    <div className='single-post' key={post.id}>
        <h4>{post.title}</h4>
        <CommentList comments={comments}/>
        <CommentCreate post={post} setComments={setComments}/>
    </div>
  )
}

export default SinglePost