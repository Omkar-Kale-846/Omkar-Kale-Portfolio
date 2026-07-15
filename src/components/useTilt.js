import { useRef } from "react";
import gsap from "gsap";

// Attach to a card's PHOTO element specifically — not the whole card.
// The photo wrapper isn't controlled by Framer Motion at all, so GSAP
// can fully own its transform with zero risk of two systems fighting
// over the same property. The outer card keeps its own Framer-Motion-
// driven entrance and hover lift, untouched, on a separate element.
//
// Returns tiltRef/onTiltMove/onTiltLeave (not the generic ref/onMouseMove/
// onMouseLeave) on purpose, so these can be combined with an element's
// existing mouse handlers (e.g. carousel pause-on-hover) instead of
// silently overwriting them if spread directly onto the element.
const useTilt = (maxTilt = 6) => {
  const ref = useRef(null);
  const quick = useRef(null);

  const setup = () => {
    if (quick.current) return;
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { transformPerspective: 800 });
    quick.current = {
      rotateX: gsap.quickTo(el, "rotateX", {
        duration: 0.4,
        ease: "power3.out",
      }),
      rotateY: gsap.quickTo(el, "rotateY", {
        duration: 0.4,
        ease: "power3.out",
      }),
    };
  };

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    setup();

    const rect = el.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;

    quick.current.rotateX(-relY * maxTilt * 2);
    quick.current.rotateY(relX * maxTilt * 2);
  };

  const handleMouseLeave = () => {
    if (!quick.current) return;
    quick.current.rotateX(0);
    quick.current.rotateY(0);
  };

  return {
    tiltRef: ref,
    onTiltMove: handleMouseMove,
    onTiltLeave: handleMouseLeave,
  };
};

export default useTilt;
