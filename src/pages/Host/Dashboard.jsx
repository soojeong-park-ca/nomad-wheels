import { defer, useLoaderData, Link } from "react-router-dom";

import CenteredMaxWidthBox from "../../components/CenteredMaxWidthBox";
import HostVansEls from "../../components/HostVansEls";

import { fetchVans } from "../../api";
import { requireAuth } from "../../utils/requireAuth";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export async function loader({ request }) {
  await requireAuth(request);
  return defer({ allVansData: fetchVans() });
}

export function renderDashboardHostVansElements(vans) {
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

export default function Dashboard() {
  const [userData] = useLocalStorage("userData", null);
  // console.log("userData from localStorage: ", userData);
  const dataPromise = useLoaderData();

  return (
    <div className="host-dashboard">
      <div className="host-dashboard-desktop-layout">
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
                <HostVansEls dataPromise={dataPromise} userData={userData} />
              </div>
            </CenteredMaxWidthBox>
          </div>
        </section>
      </div>
    </div>
  );
}
