import { Link } from "react-router-dom";

export default function About() {
  return (
    <section id="about" className="about margin-bottom-2xl">
      <div className="about__info app-padding-inline-default margin-bottom-xl">
        <div className="max-width center-hori">
          <h2 className="heading-secondary margin-bottom-m">
            Don’t squeeze in a sedan when you could relax in a van.
          </h2>
          <hr className="margin-bottom-l" />
          <div className="about__info-text">
            <p className="paragraph">
              Leave the confines of cramped sedans behind and embrace the
              liberating comfort of a spacious van. Nomad Wheels invites you to
              experience unforgettable travel moments that go beyond the
              ordinary.
            </p>
            <p className="paragraph">
              Whether you're embarking on a road trip, planning a camping
              adventure, or simply seeking a mobile sanctuary, our van rentals
              offer the perfect blend of convenience, versatility, and style.
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
