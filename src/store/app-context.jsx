import { createContext } from "react";

const AppContext = createContext({
  // for mobile / desktop versions of nav
  mobile: null,
  navOpen: false,
  onWindowResize: () => {},
  onMobileMenuClick: () => {},
  onCloseMobileNav: () => {},
  onEscPress: () => {},
  onOverlayClick: () => {},

  // for testimonial section btns
  currentTestimonialIndex: 0,
  onLeftTestimonialClick: () => {},
  onRightTestimonialClick: () => {},
  onResetTestimonialTo0: () => {},
  onResetTestimonialToMax: () => {},
});

export default AppContext;
