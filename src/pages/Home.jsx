import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section id="home" className="home">
      <h1 className="heading-primary h1-margin">
        You got the travel plans, we got the travel vans.
      </h1>
      <p className="paragraph">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <Link to="/vans" className="btn btn--orange margin-bottom-big">
        <div>Find your van</div>
      </Link>
    </section>
  );
}
