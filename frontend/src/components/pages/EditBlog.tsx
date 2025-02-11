import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "../ui/button";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditBlog() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    interface blogEdit {
        title: string;
        content: string;
    }

    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + "/blog/posts/" + id, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
        .then((resp) => {
            setTitle(resp.data.res?.title || "");
            setContent(resp.data.res?.content || "");
        })
        .catch((error) => console.error("Error fetching blog:", error));
    }, [id]);

    async function handleClick() {
        try {
            const blog: blogEdit = { title, content };
            const apiUrl = import.meta.env.VITE_BACKEND_URL;
            const resp = await axios.put(apiUrl + "/blog/posts/" + id, blog, {
                headers: { Authorization: "Bearer " + localStorage.getItem("token") }
            });

            if (resp.status === 200) {
                alert("Blog Edited Successfully!");
                navigate("/blog/" + id);
            }else{
                console.log(resp.data.error);
            }
        } catch (error) {
            console.error("Update failed:", error);
            alert("Failed to update blog. Please try again.");
        }
    }

    return (
        <div className="w-full max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg mt-10">
            <h2 className="text-3xl font-bold text-gray-900 text-center">Edit your blog!</h2>

            <div className="mt-6">
                <label className="block text-lg font-semibold text-gray-700">Title</label>
                <input
                    type="text"
                    placeholder="Edit your blog title..."
                    value={title}
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
                <Button onClick={handleClick}>Edit Blog</Button>
                <div className="px-2">
                    <Button onClick={() => navigate("/blogs")}>Go Home</Button>
                </div>
            </div>
        </div>
    );
}
