import React from 'react'
import { Link } from "react-router-dom";
import {useState,useEffect} from "react"
import Comments from '../components/Comments'

const CommentPage = () => {
    const [comments,setComments] = useState([])
    const [searchTerms, setSearchTerms] = useState('')

    useEffect(()=>{
        const getComments = async () =>{
          const commentsFromJSON = await fetchComments()
          setComments(commentsFromJSON)
        }
        getComments()
      },[])
    
      // Fetch Comments data
      const fetchComments = async () => {
        const res= await fetch("https://jsonplaceholder.typicode.com/comments")
        const data = await res.json()
    
        return data
      }
    
    // Delete Comment
    const deleteComment = (id)=>{
        window.confirm('Are you sure you wish to delete this comment?')&& setComments(comments.filter((comment)=>comment.id!==id))
    }

    // Clear search
    const clearSearch = ()=> {
      setSearchTerms('')
    }
  return (
    <div>
        <Link to="/">go back</Link>
        <div className="search">
        <input className="search_bar" type="text" placeholder="search by post ID..." 
        value={searchTerms} onChange={(e)=>{setSearchTerms(e.target.value)}}/>
        <button className="button_search" onClick={clearSearch}>Clear</button>
        <h1>Manage Comments</h1>
        </div>
        
        <Comments comments={comments} onDelete={deleteComment} search={searchTerms}/>
    </div>
  )
}

export default CommentPage