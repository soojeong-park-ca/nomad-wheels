import { redirect } from "react-router-dom";

export async function requireAuth(request) {
  const pathname = new URL(request.url).pathname;
  const isLoggedIn = localStorage.getItem("user");
  console.log(isLoggedIn);

  // Redirect to Login page with message
  if (!isLoggedIn) {
    throw redirect(
      `/login?message=You must log in first&redirectTo=${pathname}`
    );
  }

  return null;
}
