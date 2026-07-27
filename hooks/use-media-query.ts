"use client";

import { useEffect, useState } from "react";

/** Avoid SSR mismatch: returns `defaultValue` until mounted. */
export function useMediaQuery(query: string, defaultValue = false) {
  const [matches, setMatches] = useState(defaultValue);

  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [query]);

  return matches;
}

export function useIsCompactViewport() {
  return useMediaQuery("(max-width: 1023px)", true);
}
