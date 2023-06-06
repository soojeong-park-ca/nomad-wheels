import { Suspense } from "react";
import { Link, Await } from "react-router-dom";

import AnimatedLoading from "../components/AnimatedLoading";
import Error from "../components/Error";

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

export default function HostVansEls({ dataPromise, userData }) {
  return (
    <Suspense fallback={<AnimatedLoading />}>
      <Await resolve={dataPromise.allVansData} errorElement={<Error />}>
        {loadedVans => {
          const hostVans = loadedVans.filter(van => van.hostId === userData.id);

          return (
            <div className="hostvans-list">
              {renderDashboardHostVansElements(hostVans)}
            </div>
          );
        }}
      </Await>
    </Suspense>
  );
}
