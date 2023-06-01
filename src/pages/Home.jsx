import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <About />
      <Features />
    </div>
  );
}
