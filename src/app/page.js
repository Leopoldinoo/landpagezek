import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Categories from "@/components/Categories";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-gray-800 scroll-smooth">
      <Header />
      <Hero />
      <About />
      <Categories />
      <Contact />
      <Footer />
    </main>
  );
}