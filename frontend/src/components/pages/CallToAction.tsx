import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CallToAction() {
  return (
    <section className="bg-blue-600 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated</h2>
        <p className="text-xl mb-8 text-blue-100">Subscribe to our newsletter for the latest blog posts and updates</p>
        <form className="max-w-md mx-auto flex gap-2">
          <Input type="email" placeholder="Enter your email" className="flex-grow" />
          <Button type="submit" variant="secondary">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}

