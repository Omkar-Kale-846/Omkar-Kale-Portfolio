import { useRef } from "react";
import gsap from "gsap";

// Wraps a link/button so it subtly pulls toward the cursor when hovered,
// and eases back to rest on mouse leave. Purely decorative — does
// nothing meaningful on touch devices, since there's no hovering cursor
// to react to there in the first place.
const MagneticButton = ({ children, className, ...props }) => {
  const ref = useRef(null);
  const quickX = useRef(null);
  const quickY = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    // gsap.quickTo is built for exactly this — repeatedly updating the
    // same tween target on a fast-firing event like mousemove, without
    // the overhead of creating a new tween on every call
    if (!quickX.current) {
      quickX.current = gsap.quickTo(el, "x", {
        duration: 0.4,
        ease: "power3.out",
      });
      quickY.current = gsap.quickTo(el, "y", {
        duration: 0.4,
        ease: "power3.out",
      });
    }

    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);

    quickX.current(relX * 0.25);
    quickY.current(relY * 0.25);
  };

  const handleMouseLeave = () => {
    quickX.current?.(0);
    quickY.current?.(0);
  };

  return (
    <a
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </a>
  );
};

export default MagneticButton;
