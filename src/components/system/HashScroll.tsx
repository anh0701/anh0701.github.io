import { useEffect } from "react";

import { useLocation } from "react-router-dom";

export default function HashScroll() {
  const location = useLocation();

  useEffect(() => {
    // HOME
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    // HASH SECTION
    const id = location.hash.replace("#", "");

    setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  }, [location]);

  return null;
}
