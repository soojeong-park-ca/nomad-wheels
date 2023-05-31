import { defer, useLoaderData } from "react-router-dom";
import { requireAuth } from "../../utils/requireAuth";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export async function loader({ request }) {
  await requireAuth(request);
  // return defer({ allHostVansData: fetchAllHostVansData() });
  return null;
}

export default function Dashboard() {
  const [userData] = useLocalStorage("userData", null);
  console.log("userData from localStorage: ", userData);

  return (
    <>
      <h1>Dashboard</h1>
      <h2>Welcome {userData.name}!</h2>
    </>
  );
}
