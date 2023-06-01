import { Link } from "react-router-dom";

import homeBgImg from "../assets/images/home-bg.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero app-padding-inline-default margin-bottom-2xl"
    >
      <img
        className="hero__bg-img"
        src={homeBgImg}
        alt="A mountain view from a van window"
      />

      <div className="max-width center-hori">
        <div className="hero__title">
          <h1 className="heading-primary margin-bottom-s">
            You got the travel plans, we got the travel vans.
          </h1>
          <p className="paragraph margin-bottom-s">
            Step into a van that's tailor-made for your travel dreams and
            embrace the true essence of exploration.
          </p>
        </div>

        <Link to="/vans" className="btn btn--orange">
          <div>Find your van</div>
        </Link>
      </div>
    </section>
  );
}