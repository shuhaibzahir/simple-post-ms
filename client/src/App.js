import React, { useEffect, useState } from 'react'
import PostCreate from './components/PostCreate'
import "./App.css"
import PostList from './components/PostList'
import { getPosts } from './api/postServices'
const App = () => {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    getPosts().then(res=>{
      setPosts(res.data)
    })
  },[])
  return (
    <div className='main-container'>
      <PostCreate setPost={setPosts} />
      <PostList posts={posts}/>
    </div>
  )
}

export default App