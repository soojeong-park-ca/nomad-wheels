import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer padding-block-xl">
      <div className="app-padding-inline-default">
        <div className="footer__content">
          <div className="footer__main margin-bottom-s">
            <Link
              className="btn-logo btn-home"
              to="/"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              <i className="fa-solid fa-van-shuttle logo-icon"></i> Nomad Wheels
            </Link>
          </div>

          <div className="footer__links margin-bottom-l">
            <div className="social-links margin-bottom-m">
              <div className="twitter-link">
                <a
                  href="http://www.twitter.com"
                  target="_blank"
                  rel="nonreferrer"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </div>
              <div className="instagram-link">
                <a
                  href="http://www.instagram.com"
                  target="_blank"
                  rel="nonreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
              <div className="facebook-link">
                <a
                  href="http://www.facebook.com"
                  target="_blank"
                  rel="nonreferrer"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </div>
            </div>
            <div className="site-links">
              <div className="site-links--1">
                <a href="#">
                  <div>FAQ</div>
                </a>
                <a href="#">
                  <div>Contact Us</div>
                </a>
                <a href="#">
                  <div>About Us</div>
                </a>
                <a href="#">
                  <div>Rent a Van</div>
                </a>
                <a href="#">
                  <div>Become a Host</div>
                </a>
              </div>

              <div className="site-links--2">
                <a href="#">
                  <div>Terms & Services</div>
                </a>
                <a href="#">
                  <div>Privacy Policy</div>
                </a>
                <a href="#">
                  <div>Rental Agreement</div>
                </a>
              </div>
            </div>
          </div>

          <div className="copyright">
            <div className="company">
              All rights reserved &copy; Nomad Wheels
            </div>
            <div className="coder">
              Built by{" "}
              <a
                href="https://www.linkedin.com/in/soojeong-park-ca"
                target="_blank"
                rel="nonreferrer"
              >
                Soojeong Park
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
