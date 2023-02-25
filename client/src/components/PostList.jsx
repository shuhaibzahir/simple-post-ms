import React from 'react'
import SinglePost from './SinglePost'
const PostList = ({posts}) => {

  return (
    <div className='post-container'>
        {
            posts.map(post=><SinglePost post={post} key={post.id}/>)
        }
    </div>
  )
}

export default PostList