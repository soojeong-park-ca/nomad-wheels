import { Suspense } from "react";
import { NavLink, Outlet, useLoaderData, defer, Await } from "react-router-dom";

import CenteredMaxWidthBox from "../../components/CenteredMaxWidthBox";
import BackToAllVansBtn from "../../components/BackToAllVansBtn";
import PageNav from "../../components/PageNav";
import AnimatedLoading from "../../components/AnimatedLoading";
import Error from "../../components/Error";

import { fetchVan } from "../../api";
import { requireAuth } from "../../utils/requireAuth";

export async function loader({ request, params }) {
  await requireAuth(request);
  return defer({ currentHostVanData: fetchVan(params.id) });
}

export default function HostVanDetail() {
  const dataPromise = useLoaderData();

  function renderHostVanDetail(currentHostVan) {
    return (
      <div className="hostvan-detail">
        <div className="hostvan-detail__content">
          <div className="hostvan-detail__img-container">
            <img
              className="hostvan-detail__img"
              src={currentHostVan.imageUrl}
              alt={`${currentHostVan.name} Van`}
            />
          </div>
          <div className="hostvan-detail__text">
            <div className={`btn--van-type btn--${currentHostVan.type}-fixed`}>
              {`${currentHostVan.type
                .slice(0, 1)
                .toUpperCase()}${currentHostVan.type.slice(1)}`}
            </div>
            <h1 className="vans-heading-primary">{currentHostVan.name}</h1>
            <h2 className="vans-heading-secondary">
              ${currentHostVan.price}
              <span>/day</span>
            </h2>
          </div>
        </div>

        <PageNav>
          <NavLink
            to="."
            end
            className={({ isActive }) =>
              isActive ? "hostvan-nav--active" : ""
            }
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            className={({ isActive }) =>
              isActive ? "hostvan-nav--active" : ""
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            className={({ isActive }) =>
              isActive ? "hostvan-nav--active" : ""
            }
          >
            Photos
          </NavLink>
        </PageNav>

        <Outlet context={{ currentHostVan }} />
      </div>
    );
  }

  return (
    <div className="hostvan-detail-container padding-block-xl">
      <div className="app-padding-inline-default margin-bottom-xl">
        <CenteredMaxWidthBox>
          <BackToAllVansBtn to="../vans" />
          <Suspense fallback={<AnimatedLoading />}>
            <Await
              resolve={dataPromise.currentHostVanData}
              errorElement={<Error />}
            >
              {loadedHostVan => {
                console.log("loadedHostVan: ", loadedHostVan);

                return renderHostVanDetail(loadedHostVan);
              }}
            </Await>
          </Suspense>
        </CenteredMaxWidthBox>
      </div>
    </div>
  );
}
