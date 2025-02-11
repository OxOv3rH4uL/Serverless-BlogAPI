import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "../ui/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function MyEditor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate()

  interface blogWrite {
    title:string,
    content:string
  }

  async function handleClick(){

    const blog:blogWrite = {
        title:title,
        content:content
    }

    const apiUrl = import.meta.env.VITE_BACKEND_URL;
    const resp = await axios.post(apiUrl+"/blog/posts",blog,{
        headers:{
            Authorization: "Bearer "+ localStorage.getItem("token")
        }})
    console.log(resp.data.res);
    if(resp.status === 200){
        alert("Blog Established Successfully!");
        navigate("/blog/"+resp.data.res.id)
    }else{
        alert("Internal Server Error. Cloudflare issue!")
    }
    

  }

  return (
    <div className="w-full max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg mt-10">
      <h2 className="text-3xl font-bold text-gray-900 text-center">Time to write your own blog!</h2>
      
      <div className="mt-6">
        <label className="block text-lg font-semibold text-gray-700">Title</label>
        <input
          type="text"
          placeholder="Enter your blog title..."
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 text-gray-900"
        />
      </div>

      
      <div className="mt-6">
        <label className="block text-lg font-semibold text-gray-700">Content</label>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          className="mt-2 bg-white"
        />
      </div>

      
      <div className="mt-8 flex justify-end">
        <Button onClick={handleClick}>
          Create Blog
        </Button>
        <div className="px-2">
            <Button onClick={()=>navigate("/blog")}>
            Go Home
            </Button>
        </div>
      </div>
    </div>
  );
}
