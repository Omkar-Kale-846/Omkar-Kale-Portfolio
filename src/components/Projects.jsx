import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  FolderGit2,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import SplitTitle from "./SplitTitle";
import StatCounter from "./StatCounter";
import useTilt from "./useTilt";
import "./Projects.css";

// Import disaster project images
import disasterImg1 from "../assets/project-images/disaster-command-center.png";
import disasterImg2 from "../assets/project-images/disaster-field-tasks.png";

// Import SaralMatch project images
import saralMatchImg1 from "../assets/project-images/saralmatch-home.png";
import saralMatchImg2 from "../assets/project-images/saralmatch-browse.png";
import saralMatchImg3 from "../assets/project-images/saralmatch-job-detail.png";

const projects = [
  {
    id: 1,
    title: "Aegis AI: Disaster Management & Resource Optimization",
    description:
      "An AI-powered disaster response platform that triages emergency reports sent over SMS and routes them automatically. Built offline-first as a PWA, so it keeps working across 10+ emergency stations even with poor connectivity.",
    stats: [
      { value: 95, prefix: "~", suffix: "%", label: "Triage Accuracy" },
      { value: 40, prefix: "~", suffix: "%", label: "Faster Coordination" },
    ],
    tech: ["Node.js", "React.js", "MongoDB", "Python"],
    github: "https://github.com/kale-omkar/Disaster-Resource-Optimizer-AI",
    demo: "#",
    images: [disasterImg1, disasterImg2],
  },
  {
    id: 2,
    title: "SaralMatch: Job Recommendation Engine",
    description:
      "A job recommendation engine that reads resumes with Transformer models and matches candidates to the roles they're actually best suited for. It also uses Google GenAI to parse resumes straight from PDF, eliminating manual data entry across 10+ industries.",
    stats: [
      { value: 33, suffix: "%", label: "Better Matches" },
      { value: 120, suffix: "+", label: "Job Attributes" },
    ],
    tech: [
      "Node.js",
      "React.js",
      "MongoDB",
      "Transformer Model",
      "Google GenAI",
    ],
    github:
      "https://github.com/kale-omkar/SaralMatch-AI-Powered-Job-Recommendation-Engine",
    demo: "#",
    images: [saralMatchImg1, saralMatchImg2, saralMatchImg3],
  },
];

const ProjectCard = ({ project, index, isInView }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { tiltRef, onTiltMove, onTiltLeave } = useTilt();

  // Auto-slide images every 3 seconds
  useEffect(() => {
    if (!project.images || project.images.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [project.images, isPaused]);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1,
    );
  };

  const hasLiveDemo = Boolean(project.demo) && project.demo !== "#";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="project-card"
      whileHover={{ y: -8 }}
    >
      {project.images && project.images.length > 0 && (
        <div
          ref={tiltRef}
          className="project-image-carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseMove={onTiltMove}
          onMouseLeave={() => {
            setIsPaused(false);
            onTiltLeave();
          }}
        >
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
            className="project-image"
          />
          {project.images.length > 1 && (
            <>
              <button
                className="carousel-btn carousel-btn-left"
                onClick={prevImage}
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                className="carousel-btn carousel-btn-right"
                onClick={nextImage}
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
              <div className="carousel-dots">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`carousel-dot ${
                      idx === currentImageIndex ? "active" : ""
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                    aria-current={
                      idx === currentImageIndex ? "true" : undefined
                    }
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
      )}

      <div className="project-header">
        <div className="project-icon">
          <FolderGit2 size={28} />
        </div>
        <div className="project-links">
          <a href={project.github} className="project-link" aria-label="GitHub">
            <Github size={20} />
          </a>
          {hasLiveDemo && (
            <a
              href={project.demo}
              className="project-link"
              aria-label="Live Demo"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>

      {project.stats && (
        <div className="project-stats">
          {project.stats.map((stat) => (
            <div key={stat.label} className="project-stat">
              <StatCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                className="project-stat-value"
              />
              <span className="project-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      )}

      <div className="project-tech">
        {project.tech.map((tech) => (
          <span key={tech} className="project-tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className="projects section" id="projects" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <span className="section-tag">
            <FolderGit2 size={16} />
            {"<Projects />"}
          </span>
          <SplitTitle className="section-title">Featured Work</SplitTitle>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
