import { Form, Link } from "react-router-dom";

export default function SignUp() {
  return (
    <section id="#signup" class="signup margin-bottom-2xl">
      <div className="app-padding-inline-default margin-bottom-xl">
        <div className="max-width center-hori">
          <div className="signup__content">
            <h3 className="heading-tertiary margin-bottom-s">
              Start your adventure
            </h3>
            <Form method="post" className="signup__form">
              <div className="signup__form-group">
                <label htmlFor="signup-name" className="signup__form-label">
                  Full Name
                </label>
                <input
                  id="signup-name"
                  name="name"
                  type="text"
                  placeholder="Full name"
                />
              </div>

              <div className="signup__form-group">
                <label htmlFor="signup-email" className="signup__form-label">
                  Email Address
                </label>
                <input
                  id="signup-email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                />
              </div>

              <div className="signup__form-group signup__form-group-radio">
                <div className="form__radio">
                  <input
                    type="radio"
                    name="signup-type"
                    id="rent"
                    className="form__radio-input"
                  />
                  <label htmlFor="rent" class="form__radio-label">
                    <span class="form__radio-btn"></span>Rent a van
                  </label>
                </div>

                <div className="form__radio">
                  <input
                    type="radio"
                    name="signup-type"
                    id="host"
                    className="form__radio-input"
                  />
                  <label htmlFor="host" class="form__radio-label">
                    <span class="form__radio-btn"></span>Host a van
                  </label>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
