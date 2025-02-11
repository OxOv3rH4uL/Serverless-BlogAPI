
import { blogProps } from "@/utils/types";

const BlogPage:React.FC<blogProps> = ({title,content,username}) => {
  

  // Dummy Blog Data (Replace with API Call)
//   const blog = {
//     title: "Mastering React with TypeScript",
//     content: `
//       React and TypeScript together help developers build scalable and maintainable applications. 
//       TypeScript provides static typing, making debugging easier and improving developer experience.
      
//       Here are some key benefits:
//       - Type Safety
//       - Better Code Completion
//       - Catch Errors Early

//       This blog covers the best practices for using TypeScript with React.
//     `,
//     author: "John Doe",
//     date: "Feb 4, 2025",
//   };
  const plainTextContent = content.replace(/<[^>]+>/g, "")
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-gray-500 text-sm mb-6">
        By <span className="font-semibold">{username}</span>
      </p>
      <div className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
        {plainTextContent}
      </div>
    </div>
  );
};

export default BlogPage;
