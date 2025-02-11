import { BrowserRouter,Route,Routes } from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Login } from "./pages/Login"
import  Blogs from "./pages/Blogs"
import Blog from "./pages/Blog"
import Publish from "./pages/Publish"
import Profile from "./pages/Profile"
import BlogEditor from "./pages/BlogEditor"
import Home from "./pages/Home"


function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Login/>}/>
        <Route path="/blog/:id" element={<Blog/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/publish" element={<Publish/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/edit/:id" element={<BlogEditor/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
