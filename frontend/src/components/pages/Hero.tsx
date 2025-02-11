import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function Hero() {
  const navigate = useNavigate();

  function handleClick(){
    navigate("/signup");
  }
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Blogspace</h1>
        <p className="text-xl text-gray-600 mb-8">Discover insightful articles on various topics</p>
        <Button size="lg" onClick={handleClick}>Start Reading</Button>
      </div>
    </section>
  )
}

