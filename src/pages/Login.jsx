import {
  useLoaderData,
  useActionData,
  useNavigation,
  Form,
  redirect,
  Link,
} from "react-router-dom";

import { loginUser } from "../api";
import { publishCustomEvent } from "../utils/eventListeners";

export function loader({ request }) {
  const url = new URL(request.url);
  const message = url.searchParams.get("message");
  // console.log(message); // You must log in first
  return message;
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/host";
  // console.log("pathname: ", pathname);

  try {
    const userData = await loginUser({ email, password });
    console.log("userData: ", userData);
    const key = "loggedin";
    const newValue = JSON.stringify(true);
    const key2 = "userData";
    const newValue2 = JSON.stringify(userData);

    localStorage.setItem(key, newValue);
    publishCustomEvent("login", { key, newValue });
    localStorage.setItem(key2, newValue2);
    publishCustomEvent("login", { key2, newValue2 });

    return redirect(pathname);
  } catch (err) {
    const key = "loggedin";
    const newValue = JSON.stringify(false);

    localStorage.setItem(key, newValue);
    publishCustomEvent("logout", { key, newValue });

    return err.message;
  }
}

export default function Login() {
  const redirectMessage = useLoaderData();
  const errorMessage = useActionData();
  const navigation = useNavigation();

  return (
    <section id="login" className="login">
      <h1 className="heading-primary">Sign in to your account</h1>
      {redirectMessage && (
        <h3 className="redirect-message">&#9888; {redirectMessage}</h3>
      )}
      {errorMessage && (
        <h3 className="error-message">&#9888; {errorMessage}</h3>
      )}

      <Form method="post" replace className="login-form">
        <input
          id="signin-email"
          name="email"
          type="email"
          placeholder="Email address"
        />
        <input
          id="signin-password"
          name="password"
          type="password"
          placeholder="Password"
        />
        <button style={{ backgroundColor: "yellow", padding: "1rem" }}>
          {navigation.state === "submitting" ? "Signing in..." : "Sign in"}
        </button>
      </Form>
      <div className="signup">
        <div>
          Don't have an account? <Link to="..">Create one now</Link>
        </div>
      </div>
    </section>
  );
}
