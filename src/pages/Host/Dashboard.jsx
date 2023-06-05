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
        <div key={van.id} className="hostvan-tile">
          <div className="hostvan-tile__img">
            <img src={van.imageUrl} />
          </div>
          <div className="hostvan-tile__detail">
            <h3>{van.name}</h3>
            <p className="paragraph">
              ${van.price}
              <span>/day</span>
            </p>
          </div>
          <Link to={`/host/vans/${van.id}`} className="btn--detail">
            <p>View</p>
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
                <h1 className="dashboard-heading-primary">
                  Welcome back {userData.name}!
                </h1>
                <p>
                  Income last <span>30 days</span>
                </p>
                <h2 className="dashboard-heading-secondary">$2,260</h2>
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
        <div className="app-padding-inline-default">
          <CenteredMaxWidthBox>
            <div className="host-dashboard__reviews-grid">
              <div className="review">
                <h2>Review score</h2>
                <div className="review-score">
                  <i className="fa-solid fa-star icon-star"></i>
                  <p>
                    <span>5.0</span>/5
                  </p>
                </div>
              </div>
              <Link to="reviews" className="btn--detail">
                Details
              </Link>
            </div>
          </CenteredMaxWidthBox>
        </div>
      </section>

      <section className="host-dashboard__vans">
        <div className="app-padding-inline-default">
          <CenteredMaxWidthBox>
            <div className="host-dashboard__vans-box">
              <div className="host-dashboard__vans-title">
                <h2>Your listed vans</h2>
                <Link to="vans" className="btn--detail">
                  View all
                </Link>
              </div>
              <Suspense fallback={<AnimatedLoading />}>
                <Await
                  resolve={dataPromise.allVansData}
                  errorElement={<Error />}
                >
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
            </div>
          </CenteredMaxWidthBox>
        </div>
      </section>
    </div>
  );
}
