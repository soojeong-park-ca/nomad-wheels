import { useLoaderData, defer } from "react-router-dom";

import CenteredMaxWidthBox from "../../components/CenteredMaxWidthBox";
import HostVansEls from "../../components/HostVansEls";

import { fetchVans } from "../../api";
import { requireAuth } from "../../utils/requireAuth";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export async function loader({ request }) {
  await requireAuth(request);
  return defer({ allVansData: fetchVans() });
}

export default function HostVans() {
  const [userData] = useLocalStorage("userData", null);
  const dataPromise = useLoaderData();

  return (
    <section>
      <div className="app-padding-inline-default">
        <CenteredMaxWidthBox>
          <h1 className="host-vans-title">Your listed vans</h1>
          <HostVansEls dataPromise={dataPromise} userData={userData} />
        </CenteredMaxWidthBox>
      </div>
    </section>
  );
}
