import { useReducer } from "react";

import AppContext from "./app-context";

const WINDOW_RESIZE = "WINDOW_RESIZE";
const CLICK_MOBILE_MENU = "CLICK_MOBILE_MENU";
const CLOSE_MOBILE_NAV = "CLOSE_MOBILE_NAV";
const PRESS_ESC_KEY = "PRESS_ESC_KEY ";
const CLICK_NAV_OVERLAY = "CLICK_NAV_OVERLAY";

const initialState = {
  mobile: window.innerWidth <= 768,
  navOpen: false,
  onWindowResize: () => {},
  onMobileMenuClick: () => {},
  onCloseMobileNav: () => {},
  onEscPress: () => {},
  onOverlayClick: () => {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case WINDOW_RESIZE:
      return { ...state, mobile: window.innerWidth <= 768 };
    case CLICK_MOBILE_MENU:
      return { ...state, navOpen: !state.navOpen };
    case CLOSE_MOBILE_NAV:
      return { ...state, navOpen: false };
    case PRESS_ESC_KEY:
      return { ...state, navOpen: false };
    case CLICK_NAV_OVERLAY:
      return { ...state, navOpen: false };
  }
};

export default function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleWindowResize() {
    dispatch({
      type: WINDOW_RESIZE,
    });
  }

  function handleMobileMenuClick() {
    dispatch({ type: CLICK_MOBILE_MENU });
  }

  function handleCloseMobileNav() {
    dispatch({ type: CLOSE_MOBILE_NAV });
  }

  function handleEscPress() {
    dispatch({ type: PRESS_ESC_KEY });
  }

  function handleOverlayClick() {
    dispatch({ type: CLICK_NAV_OVERLAY });
  }

  const appContext = {
    mobile: state.mobile,
    navOpen: state.navOpen,
    onWindowResize: handleWindowResize,
    onMobileMenuClick: handleMobileMenuClick,
    onCloseMobileNav: handleCloseMobileNav,
    onEscPress: handleEscPress,
    onOverlayClick: handleOverlayClick,
  };

  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
}
