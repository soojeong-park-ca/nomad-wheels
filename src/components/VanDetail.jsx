import { Suspense } from "react";
import { useLocation, useLoaderData, defer, Await } from "react-router-dom";

import CenteredMaxWidthBox from "./CenteredMaxWidthBox";
import BackToAllVansBtn from "../components/BackToAllVansBtn";

import { fetchVan } from "../api";

import AnimatedLoading from "../components/AnimatedLoading";
import Error from "../components/Error";

export function loader({ params }) {
  // console.log("params: ", params);
  return defer({ currentVan: fetchVan(params.id) });
}

export default function VanDetail() {
  const location = useLocation();
  // console.log("location: ", location);
  const dataPromise = useLoaderData();
  const backTo = location.state?.search || "";

  return (
    <section id="van" className="van padding-block-xl">
      <div className="app-padding-inline-default margin-bottom-xl">
        <CenteredMaxWidthBox>
          <div className="van__detail-container">
            <BackToAllVansBtn
              to={`..${backTo}`}
              relative="path"
              type={location.state?.type || "all"}
            />
            <Suspense fallback={<AnimatedLoading />}>
              <Await resolve={dataPromise.currentVan} errorElement={<Error />}>
                {currentVan => {
                  return (
                    <div className="van__detail">
                      <div className="van__detail-img-container">
                        <img
                          className="van__detail-img"
                          src={currentVan.imageUrl}
                          alt={`${currentVan.name} Van`}
                        />
                      </div>
                      <div className="van__detail-content">
                        <div
                          className={`btn--van-type btn--${currentVan.type}-fixed`}
                        >
                          {`${currentVan.type
                            .slice(0, 1)
                            .toUpperCase()}${currentVan.type.slice(1)}`}
                        </div>
                        <div className="van__detail-text">
                          <h1 className="vans-heading-primary">
                            {currentVan.name}
                          </h1>
                          <h2 className="vans-heading-secondary ">
                            ${currentVan.price}
                            <span>/day</span>
                          </h2>
                          <p className="van__detail-descript ">
                            {currentVan.description}
                          </p>
                        </div>
                        <button className="btn btn--orange">
                          Rent this van
                        </button>
                      </div>
                    </div>
                  );
                }}
              </Await>
            </Suspense>
          </div>
        </CenteredMaxWidthBox>
      </div>
    </section>
  );
}
