import { Link } from "react-router-dom";
import CenteredMaxWidthBox from "./CenteredMaxWidthBox";

export default function About() {
  return (
    <section id="about" className="about padding-block-2xl">
      <div className="about__info app-padding-inline-default margin-bottom-xl">
        <CenteredMaxWidthBox>
          <h2 className="heading-secondary margin-bottom-l">
            Don’t squeeze in a sedan when you could relax in a van.
          </h2>
          <div className="about__info-detail">
            <p className="paragraph">
              Leave the confines of cramped sedans behind and embrace the
              liberating comfort of a spacious van.
            </p>
            <p>
              Nomad Wheels invites you to experience unforgettable travel
              moments that go beyond the ordinary. Our thoughtfully selected
              range of travel vans ensures that you can bid farewell to
              squeezing and welcome a world of freedom and relaxation.
            </p>
          </div>
        </CenteredMaxWidthBox>
      </div>

      <div className="cta app-padding-inline-default">
        <CenteredMaxWidthBox>
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
        </CenteredMaxWidthBox>
      </div>
    </section>
  );
}
