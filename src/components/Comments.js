import Comment from './Comment'

const Comments = (props) => {
  return (
    <div className="container">
    {props.comments.filter((comment)=>{
            if (props.search===""){
                const newComment = comment
                return comment
            }
            else if(comment.postId===Number(props.search)){      
                return comment
            }
        }).map((comment)=>(
        <Comment key={comment.id} comment={comment} onDelete={props.onDelete}/>
    ))}
    </div>
  )
}

export default Comments