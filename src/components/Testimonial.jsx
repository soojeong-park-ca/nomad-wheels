import { useContext } from "react";

import { customerTestimonials } from "../customer-testimonials";

import CenteredMaxWidthBox from "./CenteredMaxWidthBox";

import testimonialBgVidMp4 from "../assets/images/videos/testimonial-bg-vid.mp4";
import testimonialBgVidWebm from "../assets/images/videos/testimonial-bg-vid.webm";

import AppContext from "../store/app-context";

export default function Testimonial() {
  const appCtx = useContext(AppContext);

  const testimonialElements = customerTestimonials.map(item => (
    <div key={item.id} className="testimonial__item">
      <div className="testimonial__review">
        <p className="summary">
          <i className="fa-solid fa-quote-left"></i>
          {item.summary}
          <i className="fa-solid fa-quote-right"></i>
        </p>
        <hr width="60%" />
        <p className="customer-name">{item.name}</p>
      </div>
    </div>
  ));

  function handleLeftBtnClick() {
    if (appCtx.currentTestimonialIndex > 0) {
      appCtx.onLeftTestimonialClick();
    } else {
      appCtx.onResetTestimonialToMax(testimonialElements);
    }
  }

  function handleRightBtnClick() {
    if (appCtx.currentTestimonialIndex < testimonialElements.length - 1) {
      appCtx.onRightTestimonialClick();
    } else {
      appCtx.onResetTestimonialTo0();
    }
  }

  const currentTestimonialElement =
    testimonialElements[appCtx.currentTestimonialIndex];

  return (
    <section id="testimonial" className="testimonial padding-block-2xl">
      <div className="app-padding-inline-default">
        <CenteredMaxWidthBox>
          <h2 className="heading-secondary margin-bottom-l">
            We make people genuinely happy
          </h2>

          <div className="testimonial__content margin-bottom-s">
            <div className="bg-video">
              <video
                className="bg-video__content"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={testimonialBgVidMp4} type="video/mp4" />
                <source src={testimonialBgVidWebm} type="video/webm" />
                Your browser is not supported!
              </video>
            </div>
            <div className="testimonial__text">
              {currentTestimonialElement}
              <button className="btn--left" onClick={handleLeftBtnClick}>
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button className="btn--right" onClick={handleRightBtnClick}>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </CenteredMaxWidthBox>
      </div>
    </section>
  );
}
