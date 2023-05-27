import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section id="home" className="home">
      <h1 className="headingPrimary headingPrimaryHome">
        You got the travel plans, we got the travel vans.
      </h1>
      <p className="paragraph">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <Link to="/vans">
        <div className="btnOrange">Find your van</div>
      </Link>
    </section>
  );
}
