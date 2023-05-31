import { Link } from "react-router-dom";
import aboutImg from "../assets/images/van-night.png";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__info app-padding-inline-default">
        <h1 className="heading-primary">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="paragraph">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
          <br />
          <br />
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>

      <div className="cta">
        <h2 className="heading-secondary">
          Your destination is waiting.
          <br />
          Your van is ready.
        </h2>

        <Link to="/vans">
          <div className="btn--black">Explore our vans</div>
        </Link>
      </div>

      <img
        className="about__img"
        src={aboutImg}
        alt="People sitting at the opened back of a lit-up van at night"
      />
    </section>
  );
}
