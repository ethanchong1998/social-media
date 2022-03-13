import PostPage from './pages/PostPage'
import HomePage from './pages/HomePage'
import CommentPage from './pages/CommentPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
      <Route path="/posts" element={<PostPage/>}/>
      <Route path="/comments" element={<CommentPage/>}/>

    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
