"use client";

import { useEffect, useState } from "react";

// Returns the id of the section currently nearest the top of the viewport.
export function useScrollSpy(ids, offset = 0.38) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const handler = () => {
      const mid = window.innerHeight * offset;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= mid) current = id;
      }
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(","), offset]);

  return active;
}
