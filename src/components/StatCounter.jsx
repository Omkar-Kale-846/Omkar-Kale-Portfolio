import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import gsap from "gsap";

// Animates a number counting up from 0 to `value` once it scrolls into
// view. Deliberately triggered by Framer Motion's useInView — the same
// proven mechanism driving every other reveal on this site — rather
// than GSAP ScrollTrigger, to avoid anything resembling the Lenis/
// ScrollTrigger interaction that caused problems earlier. GSAP itself
// is only used here for the smooth numeric tween between 0 and value.
const StatCounter = ({
  value,
  prefix = "",
  suffix = "",
  duration = 1.4,
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Respect reduced motion: jump straight to the final value instead
    // of animating the count-up
    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    const counter = { val: 0 };
    const tween = gsap.to(counter, {
      val: value,
      duration,
      ease: "power2.out",
      onUpdate: () => setDisplayValue(Math.round(counter.val)),
    });

    return () => tween.kill();
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};

export default StatCounter;
