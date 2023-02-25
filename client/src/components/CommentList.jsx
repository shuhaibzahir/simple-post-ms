import React from 'react'

const CommentList = ({comments}) => {
  
  return (
    <div>
        <ul>
            {
            comments.map(comment=> <li key={comment.id}>{
              comment.status ==="rejected" ? "This comment rejected" :(
                comment.status=== "pending" ? "thi is pending" :  comment.content 
              )
              }</li>)
            }
        </ul>
    </div>
  )
}

export default CommentList