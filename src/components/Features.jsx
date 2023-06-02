import { Link } from "react-router-dom";

export default function Features() {
  return (
    <section id="features" className="features margin-bottom-2xl">
      <div className="features__content app-padding-inline-default">
        <div className="max-width center-hori">
          <h2 className="heading-secondary margin-bottom-m">
            Explore the exceptional features of Nomad Wheels
          </h2>
          <hr className="margin-bottom-xl" />
          <div className="features__list">
            <div className="feature">
              <div className="feature__icon margin-bottom-s">
                <i className="fa-solid fa-expand feature-icon"></i>
              </div>
              <div className="feature__title margin-bottom-xs">
                <h4 className="heading-quarternary">
                  Spacious and comfortable
                </h4>
              </div>
              <div className="feature__detail">
                <p>
                  Our travel vans are designed with your comfort in mind,
                  providing ample space for relaxation, sleeping, and storage.
                  Enjoy a cozy interior that allows you to unwind and recharge
                  during your travels.
                </p>
              </div>
            </div>

            <div className="feature">
              <div className="feature__icon margin-bottom-s">
                <i className="fa-solid fa-kitchen-set feature-icon"></i>
              </div>
              <div className="feature__title margin-bottom-xs">
                <h4 className="heading-quarternary">
                  Well-equipped kitchenettes
                </h4>
              </div>
              <div className="feature__detail">
                <p>
                  Our travel vans come equipped with convenient kitchenettes,
                  including cooking stoves, refrigerators, and sinks. Prepare
                  your favorite meals or enjoy a hot cup of coffee amidst
                  breathtaking landscapes.
                </p>
              </div>
            </div>

            <div className="feature">
              <div className="feature__icon margin-bottom-s">
                <i className="fa-solid fa-list-check feature-icon"></i>
              </div>
              <div className="feature__title margin-bottom-xs">
                <h4 className="heading-quarternary">
                  Easy booking and host management
                </h4>
              </div>
              <div className="feature__detail">
                <p>
                  Our user-friendly platform allows you to effortlessly book
                  your preferred travel van. For van owners, we offer a seamless
                  host management system, empowering you to list and manage your
                  van with ease, ensuring a hassle-free rental process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
