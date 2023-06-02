import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section id="page-not-found" className="page-not-found">
      <div className="app-padding-inline-default margin-bottom-xl">
        <div className="max-width center-hori">
          <div className="page-not-found__content">
            <h1 className="heading-primary margin-bottom-m">
              Sorry, the page you were looking for was not found.
            </h1>
            <Link to="/" className="btn btn--black">
              <div>Return to home</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
