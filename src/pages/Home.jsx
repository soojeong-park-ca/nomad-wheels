import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Testimonial from "../components/Testimonial";
import SignUp from "../components/SignUp";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <About />
      <Features />
      <Testimonial />
      <SignUp />
    </div>
  );
}
