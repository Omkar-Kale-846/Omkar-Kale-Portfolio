import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";
import SplitTitle from "./SplitTitle";
import "./Experience.css";

const experiences = [
  {
    id: 1,
    role: "AI & Data Analytics Intern",
    company: "Edunet Foundation (AICTE & Shell)",
    date: "Jan 2025 – Feb 2025",
    details: [
      "Built a CNN-based waste classification model for Green Tech initiatives, reaching 92% precision.",
      "Engineered data pipelines to process 10,000+ images for model training and deployment.",
    ],
  },
  {
    id: 2,
    role: "Front-End Development Intern",
    company: "Edunet Foundation (AICTE)",
    date: "June 2024 – July 2024",
    details: [
      "Built responsive single-page apps in React, cutting page load time by 30% through optimized DOM handling.",
      "Introduced reusable component architecture across the SDLC, cutting development time by 20%.",
    ],
  },
];

const ExperienceCard = ({ experience, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="experience-card"
    >
      <div className="experience-timeline">
        <div className="timeline-dot"></div>
        {index < experiences.length - 1 && (
          <div className="timeline-line"></div>
        )}
      </div>

      <div className="experience-content">
        <div className="experience-header">
          <div className="experience-icon">
            <Briefcase size={20} />
          </div>
          <div className="experience-meta">
            <h3 className="experience-role">{experience.role}</h3>
            <p className="experience-company">{experience.company}</p>
          </div>
        </div>

        <div className="experience-date">
          <Calendar size={14} />
          <span>{experience.date}</span>
        </div>

        <ul className="experience-details">
          {experience.details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className="experience section" id="experience" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <span className="section-tag">
            <Briefcase size={16} />
            {"<Experience />"}
          </span>
          <SplitTitle className="section-title">My Journey</SplitTitle>
        </motion.div>

        <div className="experience-timeline-container">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
