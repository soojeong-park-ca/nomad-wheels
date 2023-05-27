export default function Login() {
  return (
    <section id="login" className="login">
      <h1 className="headingPrimary">Sign in to your account</h1>
      <Form method="post" replace className="loginForm">
        <input
          id="inputEmail"
          name="email"
          type="email"
          placeholder="Email address"
        />
        <input
          id="inputPassword"
          name="password"
          type="password"
          placeholder="Password"
        />
        <button>
          <Button className="btnOrange btnLogin">Sign in</Button>
        </button>
      </Form>
      <div className="signup">
        <div>
          Don't have an account? <a href="/">Create one now</a>
        </div>
      </div>
    </section>
  );
}
