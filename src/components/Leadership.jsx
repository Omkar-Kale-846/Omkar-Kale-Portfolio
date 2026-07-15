import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Star, Trophy } from "lucide-react";
import SplitTitle from "./SplitTitle";
import "./Leadership.css";

const leadershipRoles = [
  {
    id: 1,
    role: "National Winner - VOIS Marathon 2.0",
    description:
      "Named National Winner at VOIS Marathon 2.0, a hackathon organized by VOIS, Vi, and Edunet, earning a ₹2,00,000 prize. Finished in the top 3% of 1,000+ competing teams as part of Team Legacy.",
    icon: Trophy,
  },
  {
    id: 2,
    role: "President - Hackathon Club (DYPSST)",
    description:
      "Spearheaded Hacksphere 1.0 (500+ teams) and the SIH Internal Round (59+ teams). Ran logistics for both and mentored participants on pitch presentations and winning strategies.",
    icon: Award,
  },
  {
    id: 3,
    role: "Placement Committee Member",
    description:
      "Coordinated major placement drives and was the main point of contact between the student body and the Placement Officer.",
    icon: Star,
  },
];

const LeadershipCard = ({ leadership, index, isInView }) => {
  const Icon = leadership.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="leadership-card"
      whileHover={{ scale: 1.02, y: -4 }}
    >
      <div className="leadership-icon">
        <Icon size={24} />
      </div>
      <h3 className="leadership-role">{leadership.role}</h3>
      <p className="leadership-description">{leadership.description}</p>
    </motion.div>
  );
};

const Leadership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className="leadership section" id="leadership" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <span className="section-tag">
            <Award size={16} />
            {"<Leadership />"}
          </span>
          <SplitTitle className="section-title">Leadership & Achievements</SplitTitle>
        </motion.div>

        <div className="leadership-grid">
          {leadershipRoles.map((leadership, index) => (
            <LeadershipCard
              key={leadership.id}
              leadership={leadership}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
