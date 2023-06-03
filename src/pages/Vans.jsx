import { Suspense } from "react";
import { useLoaderData, useSearchParams, defer, Await } from "react-router-dom";

import Filter from "../components/Filter";
import VansList from "../components/VansList";
import AnimatedLoading from "../components/AnimatedLoading";
import Error from "../components/Error";

import { fetchVans } from "../api";

// loader function
export function loader() {
  return defer({ allVans: fetchVans() });
}

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dataPromise = useLoaderData(); // Promise
  const typeFilter = searchParams.get("type");

  return (
    <section id="vans" className="vans margin-bottom-2xl">
      <div className="app-padding-inline-default margin-bottom-xl">
        <div className="max-width center-hori">
          <h1 className="vans-heading-primary margin-bottom-s">
            Explore our vans
          </h1>

          <Suspense fallback={<AnimatedLoading />}>
            <Await resolve={dataPromise.allVans} errorElement={<Error />}>
              {loadedVans => {
                return (
                  <>
                    <Filter
                      vansData={loadedVans}
                      typeFilter={typeFilter}
                      searchParams={searchParams}
                      setSearchParams={setSearchParams}
                    />
                    <VansList
                      vansData={loadedVans}
                      typeFilter={typeFilter}
                      searchParams={searchParams}
                    />
                  </>
                );
              }}
            </Await>
          </Suspense>
        </div>
      </div>
    </section>
  );
}
