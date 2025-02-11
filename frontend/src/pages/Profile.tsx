import BlogsLoadingSkeleton from "@/components/pages/BlogsSkeleton";
import { EditBlogCard } from "@/components/pages/EditBlogCard";
import NavBar from "@/components/pages/NavBar";
import { blogCard } from "@/utils/types";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Profile(){
    const [blogs, setBlogs] = useState<blogCard[]>([]);
    const [loading , setLoading] = useState(true);

  useEffect(() => {
    axios.get(import.meta.env.VITE_BACKEND_URL + "/blog/posts",{
        headers:{
            Authorization: "Bearer "+ localStorage.getItem("token")
        }
    })
      .then((resp) => {
        setBlogs(resp.data.res);
        setLoading(false);
        console.log(blogs);
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
      <div className="container mx-auto px-4 py-8">
        <NavBar/>
    <div className="pt-10">

      <h1 className="text-3xl font-bold text-center mb-8">Your Blogs!</h1>
    </div>
      <div className="flex flex-wrap -m-4">
        {loading? <BlogsLoadingSkeleton/> : blogs.map((blog) => (
          <EditBlogCard key={blog.id} title={blog.title} content={blog.content} username={blog.author.username} id={blog.id}/>
        ))}
      </div>
    </div>
  );
}
