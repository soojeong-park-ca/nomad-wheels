import { defer, useLoaderData } from "react-router-dom";
import { requireAuth } from "../../utils/requireAuth";

export async function loader({ request }) {
  await requireAuth(request);
  // return defer({ allHostVansData: fetchAllHostVansData() });
  return null;
}

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <h2>Welcome!</h2>
    </>
  );
}
