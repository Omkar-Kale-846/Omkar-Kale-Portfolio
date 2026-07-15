import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

// Drop-in replacement for <h2 className="section-title">Text</h2>.
// Splits the text into words and reveals them with a stagger once the
// heading scrolls into view.
//
// Deliberately uses Framer Motion's useInView for the "has this scrolled
// into view" question, rather than GSAP ScrollTrigger — useInView is
// already the proven scroll-detection mechanism driving every other
// section's entrance animation on this site. GSAP is used only for what
// it's actually needed for: splitting the text and running the tween.
//
// type includes "lines" (not just "words") so GSAP's autoSplit correctly
// re-splits once the custom Fraunces font finishes downloading — verified
// against the installed gsap source that this re-split wiring requires
// "lines" to be part of the split type.
const SplitTitle = ({ children, as: Tag = "h2", className = "" }) => {
  const ref = useRef(null);
  const splitRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  // Split and hide before paint, so there's never a frame where the
  // plain unsplit text is visible before it gets hidden.
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Respect reduced motion: leave the heading as plain static text
    if (prefersReducedMotion) return;

    const split = SplitText.create(el, {
      type: "lines, words",
      autoSplit: true,
    });

    gsap.set(split.words, { opacity: 0, y: 24 });
    splitRef.current = split;

    return () => {
      split.revert();
      splitRef.current = null;
    };
  }, [children]);

  // Reveal once useInView says this heading is on screen
  useEffect(() => {
    if (!isInView || hasAnimated || !splitRef.current) return;

    gsap.to(splitRef.current.words, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.04,
    });

    setHasAnimated(true);
  }, [isInView, hasAnimated]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
};

export default SplitTitle;
