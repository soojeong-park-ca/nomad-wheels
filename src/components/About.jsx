import { Link } from "react-router-dom";

import insideSedanImg from "../assets/images/inside-sedan.png";
import spaciousVanImg from "../assets/images/spacious-van.png";

export default function About() {
  return (
    <section id="about" className="about margin-bottom-2xl">
      <div className="about__info app-padding-inline-default margin-bottom-xl">
        <div className="max-width center-hori">
          <h2 className="heading-secondary margin-bottom-m">
            Don’t squeeze in a sedan when you could relax in a van.
          </h2>
          <hr className="margin-bottom-xl" />
          <div className="about__info-detail">
            <p className="paragraph">
              Leave the confines of cramped sedans behind and embrace the
              liberating comfort of a spacious van. Nomad Wheels invites you to
              experience unforgettable travel moments that go beyond the
              ordinary. Our thoughtfully selected range of travel vans ensures
              that you can bid farewell to squeezing and welcome a world of
              freedom and relaxation.
            </p>
            <div className="about__info-img-container">
              <img src={insideSedanImg} alt="Inside of a sedan" />
            </div>
            <div className="about__info-img-container">
              <img
                src={spaciousVanImg}
                alt="Inside of a fully furnished spacious van"
              />
            </div>
            <p className="paragraph">
              Whether you're embarking on a road trip, planning a camping
              adventure, or simply seeking a mobile sanctuary, our van rentals
              offer the perfect blend of convenience, versatility, and style.
              Choose Nomad Wheels and elevate your journey to new heights, where
              limitations fade away and extraordinary memories are waiting to be
              made. Step into a van that's tailor-made for your travel dreams
              and embrace the true essence of exploration.
            </p>
          </div>
        </div>
      </div>

      <div className="cta app-padding-inline-default">
        <div className="max-width center-hori">
          <div className="cta__content">
            <h3 className="heading-tertiary margin-bottom-m">
              Your destination is waiting.
              <br />
              Your van is ready.
            </h3>

            <Link to="/vans" className="btn btn--orange">
              <div>Explore our vans</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
