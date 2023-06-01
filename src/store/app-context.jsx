import { createContext } from "react";

const AppContext = createContext({
  mobile: null,
  navOpen: false,
  onWindowResize: () => {},
  onMobileMenuClick: () => {},
  onCloseMobileNav: () => {},
  onEscPress: () => {},
  onOverlayClick: () => {},

  currentTestimonialIndex: 0,
  onLeftTestimonialClick: () => {},
  onRightTestimonialClick: () => {},
});

export default AppContext;
