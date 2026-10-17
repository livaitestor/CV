import { useEffect } from "react";

/**
 * Sticky navbar shadow + scroll-to-top button visibility.
 * Equivalent of the onscroll handler in the original main.js.
 */
export function useScrollEffects() {
  useEffect(() => {
    const navbar = document.getElementById("header-nav");
    const scrollTop = document.getElementById("scrolltop");
    const body = document.body;

    const onScroll = () => {
      if (!navbar || !scrollTop) return;
      if (window.scrollY > 0) {
        navbar.classList.add("fixed-header", "header-shadow");
        body.style.paddingTop = navbar.offsetHeight + "px";
        scrollTop.style.visibility = "visible";
        scrollTop.style.opacity = "1";
      } else {
        navbar.classList.remove("fixed-header", "header-shadow");
        body.style.paddingTop = "0px";
        scrollTop.style.visibility = "hidden";
        scrollTop.style.opacity = "0";
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
