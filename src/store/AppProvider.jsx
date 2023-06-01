import { useReducer } from "react";

import AppContext from "./app-context";

const WINDOW_RESIZE = "WINDOW_RESIZE";
const CLICK_MOBILE_MENU = "CLICK_MOBILE_MENU";
const CLOSE_MOBILE_NAV = "CLOSE_MOBILE_NAV";
const PRESS_ESC_KEY = "PRESS_ESC_KEY ";
const CLICK_NAV_OVERLAY = "CLICK_NAV_OVERLAY";
const CLICK_LEFT_TESTIMONIAL = "CLICK_LEFT_TESTIMONIAL";
const CLICK_RIGHT_TESTIMONIAL = "CLICK_RIGHT_TESTIMONIAL";
const RESET_TESTIMONIAL_INDEX_TO_0 = "RESET_TESTIMONIAL_INDEX_TO_0";
const RESET_TESTIMONIAL_INDEX_TO_MAX = "RESET_TESTIMONIAL_INDEX_TO_MAX";

const initialState = {
  mobile: window.innerWidth <= 768,
  navOpen: false,
  onWindowResize: () => {},
  onMobileMenuClick: () => {},
  onCloseMobileNav: () => {},
  onEscPress: () => {},
  onOverlayClick: () => {},

  currentTestimonialIndex: 0,
  onLeftTestimonialClick: () => {},
  onRightTestimonialClick: () => {},
  onResetTestimonialTo0: () => {},
  onResetTestimonialToMax: () => {},
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
    case CLICK_LEFT_TESTIMONIAL:
      return {
        ...state,
        currentTestimonialIndex: state.currentTestimonialIndex - 1,
      };
    case CLICK_RIGHT_TESTIMONIAL:
      return {
        ...state,
        currentTestimonialIndex: state.currentTestimonialIndex + 1,
      };
    case RESET_TESTIMONIAL_INDEX_TO_0:
      return {
        ...state,
        currentTestimonialIndex: 0,
      };
    case RESET_TESTIMONIAL_INDEX_TO_MAX:
      return {
        ...state,
        currentTestimonialIndex: action.arrLength - 1,
      };
    default:
      return state;
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

  function handleLeftTestimonialClick() {
    dispatch({ type: CLICK_LEFT_TESTIMONIAL });
  }

  function handleRightTestimonialClick() {
    dispatch({ type: CLICK_RIGHT_TESTIMONIAL });
  }

  function handleTestimonialTo0() {
    dispatch({ type: RESET_TESTIMONIAL_INDEX_TO_0 });
  }

  function handleTestimonialToMax(arr) {
    dispatch({ type: RESET_TESTIMONIAL_INDEX_TO_MAX, arrLength: arr.length });
  }

  const appContext = {
    mobile: state.mobile,
    navOpen: state.navOpen,
    onWindowResize: handleWindowResize,
    onMobileMenuClick: handleMobileMenuClick,
    onCloseMobileNav: handleCloseMobileNav,
    onEscPress: handleEscPress,
    onOverlayClick: handleOverlayClick,

    currentTestimonialIndex: state.currentTestimonialIndex,
    onLeftTestimonialClick: handleLeftTestimonialClick,
    onRightTestimonialClick: handleRightTestimonialClick,
    onResetTestimonialTo0: handleTestimonialTo0,
    onResetTestimonialToMax: handleTestimonialToMax,
  };

  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
}
