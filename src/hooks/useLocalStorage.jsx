import { useState, useRef, useEffect, useMemo } from "react";
import { subscribeToEvent, unsubscribeToEvent } from "../utils/eventListeners";

export function useLocalStorage(key, defaultValue) {
  const prevKeyRef = useRef(key);
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);

    if (storedValue === null) {
      return defaultValue;
    }

    try {
      const parsedValue = JSON.parse(storedValue);
      return parsedValue;
    } catch {
      return defaultValue;
    }
  });

  // update localStorage when state changes
  useEffect(() => {
    const currentKey = prevKeyRef.current;

    if (currentKey !== key) {
      localStorage.removeItem(currentKey);
    }

    prevKeyRef.current = key;

    localStorage.setItem(key, JSON.stringify(value));
  }, [key, prevKeyRef, value]);

  // listen for changes in localStorage
  useEffect(() => {
    const handleEvent = event => {
      const key = event.key || event.detail.key;
      const newValue = event.newValue || event.detail.newValue;

      if (key === prevKeyRef.current) {
        setValue(JSON.parse(newValue));
      }
    };

    subscribeToEvent("login", handleEvent);
    subscribeToEvent("logout", handleEvent);
    window.addEventListener("storage", handleEvent);
    return () => {
      unsubscribeToEvent("login", handleEvent);
      unsubscribeToEvent("logout", handleEvent);
      window.removeEventListener("storage", handleEvent);
    };
  }, [prevKeyRef]);

  const tuple = useMemo(() => [value, setValue], [value]);

  return tuple;
}
