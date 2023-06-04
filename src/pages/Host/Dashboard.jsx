import { Suspense } from "react";
import { defer, useLoaderData, Link, Await } from "react-router-dom";

import AnimatedLoading from "../../components/AnimatedLoading";
import Error from "../../components/Error";

import { fetchVans } from "../../api";
import { requireAuth } from "../../utils/requireAuth";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export async function loader({ request }) {
  await requireAuth(request);
  return defer({ allVansData: fetchVans() });
}

export default function Dashboard() {
  const [userData] = useLocalStorage("userData", null);
  console.log("userData from localStorage: ", userData);
  const dataPromise = useLoaderData();

  function renderDashboardHostVansElements(vans) {
    return vans.map(van => {
      return (
        <div key={van.id} className="hostVanTileLink">
          <div className="hostVanTileDetail">
            <img className="hostVanTileImg" src={van.imageUrl} />
            <div className="hostVanTileInfo">
              <h3 className="headingTertiary">{van.name}</h3>
              <p className="paragraph">
                ${van.price}
                <span>/day</span>
              </p>
            </div>
          </div>
          <Link to={`/host/vans/${van.id}`} className="btnDetail">
            View
          </Link>
        </div>
      );
    });
  }

  return (
    <div className="hostDashboard">
      <section className="hostDashboardEarnings">
        <div className="info">
          <h1 className="headingPrimary">Welcome!</h1>
          <p>
            Income last <span>30 days</span>
          </p>
          <h2 className="headingSecondary">$2,260</h2>
        </div>
        <Link to="income" className="btnDetail">
          Details
        </Link>
      </section>
      <section className="hostDashboardReviews">
        <h2 className="headingSecondary">Review score</h2>
        <i className="fa-solid fa-star star"></i>
        <p>
          <span>5.0</span>/5
        </p>
        <Link to="reviews" className="btnDetail">
          Details
        </Link>
      </section>

      <section className="hostDashboardVans">
        <div className="top">
          <h2 className="headingSecondary">Your listed vans</h2>
          <Link to="vans" className="btnDetail">
            View all
          </Link>
        </div>
        <Suspense fallback={<AnimatedLoading />}>
          <Await resolve={dataPromise.allVansData} errorElement={<Error />}>
            {loadedVans => {
              console.log("loadedVans: ", loadedVans);
              const hostVans = loadedVans.filter(
                van => van.hostId === userData.id
              );
              console.log(hostVans);

              return (
                <div className="hostVansList">
                  {renderDashboardHostVansElements(hostVans)}
                </div>
              );
            }}
          </Await>
        </Suspense>
      </section>
    </div>
  );
}
