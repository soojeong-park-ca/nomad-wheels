import { createContext } from "react";

const AppContext = createContext({
  mobile: null,
  navOpen: false,
  onWindowResize: () => {},
  onMobileMenuClick: () => {},
  onCloseMobileNav: () => {},
  onEscPress: () => {},
  onOverlayClick: () => {},
});

export default AppContext;
