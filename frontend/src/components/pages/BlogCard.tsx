import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface BlogCardProps {
  title: string;
  content: string;
  username: string;
  id: number;
}

export const BlogCard: React.FC<BlogCardProps> = ({ title, content, username, id }) => {
  const navigate = useNavigate();

  function handleClick() {
    console.log(id);
    navigate("/blog/" + id);
  }

  // Remove HTML tags before slicing content for preview
  const plainTextContent = content.replace(/<[^>]+>/g, "").slice(0, 20) + "...";

  return (
    <motion.div whileHover={{ scale: 1.02 }} className="w-full md:w-1/2 lg:w-1/3 p-4">
      <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
        <CardContent className="p-4">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          
          {/* Truncate content preview properly */}
          <p className="text-gray-600 text-sm mt-2">{plainTextContent}</p>

          <div className="flex items-center mt-4">
            <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <span className="font-medium text-gray-600 dark:text-gray-300">
                {username.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="px-3">
              <p className="text-sm font-medium text-gray-800">{username}</p>
            </div>
          </div>

          <Button variant="outline" className="mt-4 w-full" onClick={handleClick}>
            Read More
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};
