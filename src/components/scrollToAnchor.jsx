import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToAnchor() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.slice(1);

    if (hash) {
      const timer = setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });

          setTimeout(() => {
            const cleanUrl = window.location.pathname + window.location.search;

            window.history.replaceState(null, "", cleanUrl);
          }, 800);
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location]);

  return null;
}

export default ScrollToAnchor;
