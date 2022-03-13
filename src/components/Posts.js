import Post from './Post'

const Posts = (props) => {
  return (
    <div className="container">
        <h1 className="user_id">User ID: {props.user.id}</h1>
        {props.posts.filter((post)=>{
            if (props.search===""){
                return post
            }
            else if(post.title.toLowerCase().includes(props.search.toLowerCase())){
                return post
            }
            else{
                return
            }
        }).map((post)=>(
           
            post.userId===props.user.id&&<Post key={post.id} post={post} onDelete={props.onDelete}/>
            
        ))}
    </div>
  )
}

export default Posts