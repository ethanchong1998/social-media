import {FaTimes} from "react-icons/fa"

const Post = (props) => {
  return (
    <div className="post">
        <h5>Post ID: {props.post.id}</h5>
        <h3>{props.post.title}
        <FaTimes style={{color:"red",cursor:"pointer"}} onClick={()=>props.onDelete(props.post.id)}/></h3>
        <p>{props.post.body}</p>
        
    </div>
  )
}

export default Post