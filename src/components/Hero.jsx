import { Link } from "react-router-dom";

import CenteredMaxWidthBox from "./CenteredMaxWidthBox";

import homeBgImg from "../assets/images/home-bg.png";

export default function Hero() {
  return (
    <section id="hero" className="hero app-padding-inline-default">
      <img
        className="hero__bg-img"
        src={homeBgImg}
        alt="A mountain view from a van window"
      />

      <CenteredMaxWidthBox>
        <div className="hero__title">
          <h1 className="heading-primary margin-bottom-s">
            You got the travel plans, we got the travel vans.
          </h1>
          <p className="paragraph margin-bottom-l">
            Step into a van that's tailor-made for your travel dreams and
            embrace the true essence of exploration.
          </p>
        </div>

        <Link to="/vans" className="btn btn--orange">
          <div>Find your van</div>
        </Link>
      </CenteredMaxWidthBox>
    </section>
  );
}
