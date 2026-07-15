import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Trophy, ChevronLeft, ChevronRight } from "lucide-react";
import SplitTitle from "./SplitTitle";
import useTilt from "./useTilt";
import "./Hackathons.css";

import hackCruxImg1 from "../assets/hackathon/HackCrux.jpg";
import hackCruxImg2 from "../assets/hackathon/HackCrux2.jpg";
import dypDpuImg from "../assets/hackathon/DYPDPU.jpg";
import iitBhuImg1 from "../assets/hackathon/IITBHU1.jpg";
import iitBhuImg2 from "../assets/hackathon/IITBHU2.jpg";
import voisImg1 from "../assets/hackathon/VOIS1.JPG";
import voisImg2 from "../assets/hackathon/VOIS2.jpg";
import voisImg3 from "../assets/hackathon/VOIS3.JPG";

const hackathons = [
  {
    id: 1,
    name: "HackCrux Hackathon",
    result: "Runner-Up",
    images: [hackCruxImg1, hackCruxImg2],
    isWin: false,
  },
  {
    id: 2,
    name: "DYP DPU Hackathon",
    result: "National Finalist",
    images: [dypDpuImg],
    isWin: false,
  },
  {
    id: 3,
    name: "Eco Hackathon (IIT BHU)",
    result: "Finalist",
    images: [iitBhuImg1, iitBhuImg2],
    isWin: false,
  },
  {
    id: 4,
    name: "VOIS Marathon 2.0",
    result: "Hackathon Victory · ₹2,00,000 Prize",
    images: [voisImg1, voisImg2, voisImg3],
    isWin: true,
  },
];

// tick is a shared clock owned by the parent — every card advances in
// response to the same tick, so all photo changes land on the same
// moment instead of drifting apart over time.
const HackathonCard = ({ hackathon, index, isInView, tick, onHoverChange }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { tiltRef, onTiltMove, onTiltLeave } = useTilt();

  useEffect(() => {
    if (hackathon.images.length <= 1 || tick === 0) return;
    setCurrentImageIndex((prev) =>
      prev === hackathon.images.length - 1 ? 0 : prev + 1,
    );
    // hackathon.images is static per card; only the shared tick should
    // drive this effect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tick]);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === hackathon.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? hackathon.images.length - 1 : prev - 1,
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className="hackathon-card"
    >
      <div
        ref={tiltRef}
        className="hackathon-image-wrapper"
        onMouseEnter={() => onHoverChange(true)}
        onMouseMove={onTiltMove}
        onMouseLeave={() => {
          onHoverChange(false);
          onTiltLeave();
        }}
      >
        <img
          src={hackathon.images[currentImageIndex]}
          alt={`${hackathon.name} photo ${currentImageIndex + 1}`}
          className="hackathon-image"
        />
        {hackathon.images.length > 1 && (
          <>
            <button
              className="hackathon-carousel-btn hackathon-carousel-btn-left"
              onClick={prevImage}
              aria-label="Previous photo"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              className="hackathon-carousel-btn hackathon-carousel-btn-right"
              onClick={nextImage}
              aria-label="Next photo"
            >
              <ChevronRight size={16} />
            </button>
            <div className="hackathon-carousel-dots">
              {hackathon.images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`hackathon-carousel-dot ${
                    idx === currentImageIndex ? "active" : ""
                  }`}
                  aria-label={`Go to photo ${idx + 1}`}
                  aria-current={idx === currentImageIndex ? "true" : undefined}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(idx);
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="hackathon-info">
        <h3 className="hackathon-name">{hackathon.name}</h3>
        <span
          className={`hackathon-badge ${hackathon.isWin ? "badge-win" : ""}`}
        >
          {hackathon.result}
        </span>
      </div>
    </motion.div>
  );
};

const Hackathons = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [tick, setTick] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // One shared timer for the whole section. Hovering any single card
  // pauses this, which pauses every card at once, so they can never
  // drift out of sync with each other.
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setTick((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="hackathons section" id="hackathons" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <span className="section-tag">
            <Trophy size={16} />
            {"<Hackathons />"}
          </span>
          <SplitTitle className="section-title">Hackathon Highlights</SplitTitle>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hackathons-description"
        >
          These four stuck with me the most. They're far from the whole list
          of hackathons I've been part of.
        </motion.p>

        <div className="hackathons-grid">
          {hackathons.map((hackathon, index) => (
            <HackathonCard
              key={hackathon.id}
              hackathon={hackathon}
              index={index}
              isInView={isInView}
              tick={tick}
              onHoverChange={setIsPaused}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
