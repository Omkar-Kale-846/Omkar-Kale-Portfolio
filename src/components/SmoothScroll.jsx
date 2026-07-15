import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Wraps the whole app to replace native scroll with Lenis's smoother,
// physics-based scroll. Synced to GSAP's own ticker (rather than a
// separate requestAnimationFrame loop) so ScrollTrigger — which is
// what drives SplitTitle's reveals — always agrees with Lenis about
// where the page actually is.
const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Respect reduced motion: fall back to plain native scroll rather
    // than initializing Lenis at all
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const update = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return children;
};

export default SmoothScroll;
