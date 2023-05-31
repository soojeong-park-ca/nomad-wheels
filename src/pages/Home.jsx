import { useContext } from "react";
import { Link } from "react-router-dom";

import AppContext from "../store/app-context";
import homeBgImg from "../assets/images/home-bg.png";

export default function Home() {
  const appCtx = useContext(AppContext);

  return (
    <section id="home" className="home">
      <img
        className="home__bg-img"
        style={
          appCtx.mobile
            ? { objectPosition: "top" }
            : { objectPosition: "50% 68%" }
        }
        src={homeBgImg}
        alt="A mountain view from a van window"
      />
      <h1 className="heading-primary h1-margin">
        You got the travel plans, we got the travel vans.
      </h1>
      <p className="paragraph">
        Add adventure to your life by joining Nomad Wheel. Rent the perfect van
        to make your perfect road trip.
      </p>
      <Link to="/vans" className="btn btn--orange margin-bottom-big">
        <div>Find your van</div>
      </Link>
    </section>
  );
}
