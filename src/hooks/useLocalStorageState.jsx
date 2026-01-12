import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);

    // parse removes the string
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      // Stringify converts to string
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
