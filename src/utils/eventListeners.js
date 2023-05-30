// Boilerplate for addEventListener
export const subscribeToEvent = (name, listener) => {
  document.addEventListener(name, listener);
};

// Boilerplate for removeEventListener
export const unsubscribeToEvent = (name, listener) => {
  document.removeEventListener(name, listener);
};

// Boilerplate for creating a custom event
export const publishEvent = (name, data) => {
  const event = new CustomEvent(name, { detail: data });
  document.dispatchEvent(event);
};
