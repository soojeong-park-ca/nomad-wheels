import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Testimonial from "../components/Testimonial";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <About />
      <Features />
      <Testimonial />
    </div>
  );
}
