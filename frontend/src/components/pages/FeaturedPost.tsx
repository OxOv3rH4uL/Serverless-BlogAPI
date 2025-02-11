
import { Card, CardContent } from "@/components/ui/card"

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const featuredPosts = [
    {
      id: 1,
      title: "10 Tips for Productive Writing",
      content: "Boost your writing productivity with these proven strategies.",
      username: "SIN_GREED"
      
      
    },
    {
      id: 2,
      title: "The Future of AI in Content Creation",
      content: "Explore how AI is revolutionizing the way we create content.",
      username: "OxOv3rH4uL"
      
    },
    {
      id: 3,
      title: "Mastering SEO for Bloggers",
      content: "Learn the essential SEO techniques to increase your blog's visibility.",
      username:"0rezer0"
    },
]



export default function FeaturedPosts() {
    const navigate = useNavigate();
  function handleClick(){
    navigate("/signup")
  }
  return (
    <section className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Posts</h2>
      
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredPosts.map((post) => (
          <motion.div
            key={post.id}
            whileHover={{ scale: 1.02 }}
            className="w-full p-4"
          >
            <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-4">
                <h2 className="text-xl font-bold text-gray-900">{post.title}</h2>
                <p className="text-gray-600 text-sm mt-2">{post.content}</p>
    
                <div className="flex items-center mt-4">
                  <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <span className="font-medium text-gray-600 dark:text-gray-300">
                      {post.username.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="px-3">
                    <p className="text-sm font-medium text-gray-800">{post.username}</p>
                  </div>
                </div>
    
                <Button variant="outline" className="mt-4 w-full" onClick={handleClick}>
                  Read More
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  )
}

