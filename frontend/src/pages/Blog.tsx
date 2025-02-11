import BlogLoadingSkeleton from "@/components/pages/BlogSkeleton";
import BlogPage from "@/components/pages/MediumBlog";
import Navbar from "@/components/pages/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Blog() {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [username, setUsername] = useState("");
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const apiUrl = import.meta.env.VITE_BACKEND_URL;
        axios.get(`${apiUrl}/blog/posts/${id}`,{
            headers:{
                Authorization: "Bearer "+ localStorage.getItem("token")
            }})
            .then((resp) => {
                setTitle(resp.data.res.title);
                setContent(resp.data.res.content);
                setUsername(resp.data.res.author.username);
                setLoading(false);
            })
            .catch((error) => console.error("Error fetching blog:", error));
    }, [id]); 

    return (
        <>
            <Navbar />
            {loading ? <BlogLoadingSkeleton/> : <BlogPage title={title} content={content} username={username} />}
            
        </>
    );
}
