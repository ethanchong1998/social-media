import {FaTimes} from 'react-icons/fa'

const Comment = (props) => {
  return (
    <div className="post">
        <h5>Post ID: {props.comment.postId}, Comment ID: {props.comment.id}</h5>
        
        <h3>{props.comment.email} <FaTimes style={{color:"red",cursor:"pointer"}}
        onClick={()=>props.onDelete(props.comment.id)}/></h3>
        <p>{props.comment.body}</p>
    </div>
  )
}

export default Comment