import { useContext } from "react";
import { Link } from "react-router-dom";

import AppContext from "../store/app-context";
import homeBgImg from "../assets/images/home-bg.png";

export default function Hero() {
  const appCtx = useContext(AppContext);

  return (
    <section id="hero" className="hero app-padding-inline-default">
      <img
        className="hero__bg-img"
        style={
          appCtx.mobile
            ? { objectPosition: "bottom" }
            : { objectPosition: "50% 68%" }
        }
        src={homeBgImg}
        alt="A mountain view from a van window"
      />
      <h1 className="heading-primary h1-margin">
        You got the travel plans, we got the travel vans.
      </h1>
      <p className="paragraph">
        Add adventure to your life with Nomad Wheel. Rent the perfect van to
        make your perfect road trip.
      </p>
      {/* <Link to="/vans" className="btn btn--orange margin-bottom-big">
        <div>Find your van</div>
      </Link> */}
    </section>
  );
}
