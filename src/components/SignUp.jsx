import { useState, useEffect } from "react";
import CenteredMaxWidthBox from "./CenteredMaxWidthBox";

// Form Validation
const nameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)+$/;
const emailRegex =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;

function isName(name) {
  return nameRegex.test(name);
}
function isEmail(email) {
  return emailRegex.test(email);
}

export default function SignUp() {
  const [values, setValues] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  // checking input validity after form submit
  const validateAndSubmitForm = e => {
    e.preventDefault();

    const updatedErrors = {};

    if (!values.name.length) {
      updatedErrors.name = "Invalid name";
    }
    if (!values.email.length) {
      updatedErrors.email = "Invalid email address";
    }

    if (!isName(values.name)) {
      updatedErrors.name = "Invalid name";
    }
    if (!isEmail(values.email)) {
      updatedErrors.email = "Invalid email address";
    }

    setErrors(updatedErrors);
    setSignUpSuccess(false);

    if (!Object.keys(updatedErrors).length) {
      setSignUpSuccess(true);
      // reset input field
      setValues({ name: "", email: "" });
    }
  };

  // controlled input
  const setName = e => {
    setValues(prev => ({ ...prev, name: e.target.value }));
  };

  const setEmail = e => {
    setValues(prev => ({ ...prev, email: e.target.value }));
  };

  // Check for input validity when user makes changes
  useEffect(() => {
    const updatedErrors = {};

    if (values.name.length && !isName(values.name)) {
      updatedErrors.name = "Invalid name";
    }

    if (values.email.length && !isEmail(values.email)) {
      updatedErrors.email = "Invalid email address";
    }

    setErrors(updatedErrors);
  }, [values]);

  return (
    <section id="#signup" className="signup padding-block-2xl">
      <div className="app-padding-inline-default">
        <CenteredMaxWidthBox>
          <h2 className="heading-secondary margin-bottom-l">
            Join the #NomadWheels!
          </h2>

          <div className="signup__content">
            <h3 className="heading-tertiary margin-bottom-s">
              Start your adventure
            </h3>

            <form onSubmit={validateAndSubmitForm} className="signup__form">
              <div className="signup__form-group">
                <label htmlFor="signup-name" className="signup__form-label">
                  Full Name
                </label>
                <input
                  id="signup-name"
                  name="name"
                  type="text"
                  placeholder="Full name"
                  value={values.name}
                  onChange={setName}
                  className={errors.name ? "input--invalid" : ""}
                />
                {errors.name && (
                  <p className="error-text">&#9888; {errors.name}</p>
                )}
              </div>

              <div className="signup__form-group margin-bottom-s">
                <label htmlFor="signup-email" className="signup__form-label">
                  Email Address
                </label>
                <input
                  id="signup-email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={values.email}
                  onChange={setEmail}
                  className={errors.email ? "input--invalid" : ""}
                />
                {errors.email && (
                  <p className="error-text">&#9888; {errors.email}</p>
                )}
              </div>

              <button type="submit" className="btn btn--orange">
                <div>Sign up</div>
              </button>
            </form>
            {signUpSuccess && (
              <div className="signup__success">
                <div
                  className="signup__success-btn"
                  onClick={() => {
                    setSignUpSuccess(false);
                  }}
                >
                  <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="margin-bottom-s">
                  <i className="fa-solid fa-circle-check icon--check"></i>
                </div>
                <h4 className="heading-quarternary margin-bottom-xs">
                  You're all signed up!
                </h4>
                <p>
                  Please check your email for confirmation message we just sent
                  you.
                </p>
              </div>
            )}
          </div>
        </CenteredMaxWidthBox>
      </div>
    </section>
  );
}
