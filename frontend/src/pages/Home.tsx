import CallToAction from "@/components/pages/CallToAction";
import FeaturedPosts from "@/components/pages/FeaturedPost";
import Footer from "@/components/pages/Footer";
import Header from "@/components/pages/Header";
import Hero from "@/components/pages/Hero";

export default function Home() {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main>
          <Hero />
          <FeaturedPosts />
          <CallToAction />
        </main>
        <Footer />
      </div>
    )
  }
  
  