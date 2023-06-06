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
    <section id="login" className="login margin-bottom-2xl">
      <div className="app-padding-inline-default">
        <div className="max-width center-hori">
          <div className="login__content center-hori">
            <h1 className="heading-primary margin-bottom-s">
              Sign in to your account
            </h1>
            {redirectMessage && (
              <div className="redirect-message margin-bottom-xs">
                &#9888; {redirectMessage}
              </div>
            )}
            {errorMessage && (
              <div className="error-message margin-bottom-xs">
                &#9888; {errorMessage}
              </div>
            )}

            <Form method="post" replace className="login__form">
              <input
                id="signin-email"
                name="email"
                type="email"
                placeholder="Email address"
                value="jane.doe@nw.com"
              />
              <input
                id="signin-password"
                name="password"
                type="password"
                placeholder="Password"
                value="p123"
              />
              <button
                className="btn btn--orange margin-bottom-s"
                disabled={navigation.state === "submitting"}
              >
                <div>
                  {navigation.state === "submitting"
                    ? "Signing in..."
                    : "Sign in"}
                </div>
              </button>
            </Form>

            <div className="signup-text">
              <div>
                Don't have an account? <Link to="..">Create one now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
