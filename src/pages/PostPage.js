import {useState,useEffect} from "react"
import Posts from '../components/Posts'
import { Link } from "react-router-dom";

const PostPage = () => {
    const users = [
        {id:1},{id:2},{id:3},{id:4},{id:5},
        {id:6},{id:7},{id:8},{id:9},{id:10}
      ]
      const [posts,setPosts] = useState([])
      const [searchTerms, setSearchTerms] = useState('')
    
      useEffect(()=>{
        const getPosts = async () =>{
          const postsFromJSON = await fetchPosts()
          setPosts(postsFromJSON)
        }
        getPosts()
      },[])
    
      // Fetch Posts data
      const fetchPosts = async () => {
        const res= await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await res.json()
    
        return data
      }
    
      // Delete Post
      const deletePost = (id) =>{
        // if (window.confirm('Are you sure you wish to delete this item?')){
        //   setPosts(posts.filter((post)=>post.id!==id))
        // }
        window.confirm('Are you sure you wish to delete this post?')&& setPosts(posts.filter((post)=>post.id!==id))
      }

      // Clear search
      const clearSearch = ()=> {
        setSearchTerms('')
      }
  return (
    <div>
      <Link to="/">go back</Link>
      <div className="search">
      <input className="search_bar" type="text" placeholder="search by title..." 
      value={searchTerms} onChange={(e)=>{setSearchTerms(e.target.value)}}/>
      <button className="button_search" onClick={clearSearch}>Clear</button>
      </div>
      {users.map((user)=>(
        <Posts key={user.id} posts={posts} user={user} onDelete={deletePost} search={searchTerms}/>
      ))}
    </div>
  )
}

export default PostPage