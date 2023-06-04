import { Suspense } from "react";
import { defer, useLoaderData, Link, Await } from "react-router-dom";

import CenteredMaxWidthBox from "../../components/CenteredMaxWidthBox";
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
              <h3>{van.name}</h3>
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
    <div className="host-dashboard">
      <section className="host-dashboard__earnings">
        <div className="app-padding-inline-default">
          <CenteredMaxWidthBox>
            <div className="host-dashboard__earnings-grid">
              <div className="host-dashboard__earnings-info">
                <h1 className="heading-primary">
                  Welcome back {userData.name}!
                </h1>
                <p>
                  Income last <span>30 days</span>
                </p>
                <h2 className="heading-secondary">$2,260</h2>
              </div>
              <div className="detail-btn-box">
                <Link to="income" className="btn--detail">
                  Details
                </Link>
              </div>
            </div>
          </CenteredMaxWidthBox>
        </div>
      </section>

      <section className="host-dashboard__reviews">
        <h2>Review score</h2>
        <i className="fa-solid fa-star icon-star"></i>
        <p>
          <span>5.0</span>/5
        </p>
        <Link to="reviews" className="btn--detail">
          Details
        </Link>
      </section>

      <section className="host-dashboard__vans">
        <div className="hostv-dashboard__vans-title">
          <h2>Your listed vans</h2>
          <Link to="vans" className="btn--detail">
            View all
          </Link>
        </div>
        <Suspense fallback={<AnimatedLoading />}>
          <Await resolve={dataPromise.allVansData} errorElement={<Error />}>
            {loadedVans => {
              // console.log("loadedVans: ", loadedVans);
              const hostVans = loadedVans.filter(
                van => van.hostId === userData.id
              );
              console.log(hostVans);

              return (
                <div className="hostvans-list">
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
