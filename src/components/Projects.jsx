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
import "./Projects.css";

// Import disaster project images
import disasterImg1 from "../assets/disaster-command-center.png";
import disasterImg2 from "../assets/disaster-field-tasks.png";

// Import SaralMatch project images
import saralMatchImg1 from "../assets/saralmatch-home.png";
import saralMatchImg2 from "../assets/saralmatch-browse.png";
import saralMatchImg3 from "../assets/saralmatch-job-detail.png";

const projects = [
  {
    id: 1,
    title: "Disaster Response Resource Optimization",
    description:
      "An AI-powered platform for reporting emergencies via SMS with auto-triage and offline-capable route optimization for rescuers.",
    tech: ["Node.js", "React.js", "MongoDB", "Python", "AI"],
    github: "https://github.com/Omkar-Kale-846/Disaster-Resource-Optimizer-AI",
    demo: "#",
    images: [disasterImg1, disasterImg2],
  },
  {
    id: 2,
    title: "SaralMatch: Job Recommendation Engine",
    description:
      "A job recommendation engine utilizing Transformer models to analyze resumes and connect candidates to ideal roles with compatibility insights.",
    tech: ["MERN Stack", "Transformer Models"],
    github:
      "https://github.com/Omkar-Kale-846/SaralMatch-AI-Powered-Job-Recommendation-Engine",
    demo: "#",
    images: [saralMatchImg1, saralMatchImg2, saralMatchImg3],
  },
];

const ProjectCard = ({ project, index, isInView }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide images every 2 seconds
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
          className="project-image-carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
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
              >
                <ChevronLeft size={20} />
              </button>
              <button
                className="carousel-btn carousel-btn-right"
                onClick={nextImage}
              >
                <ChevronRight size={20} />
              </button>
              <div className="carousel-dots">
                {project.images.map((_, idx) => (
                  <span
                    key={idx}
                    className={`carousel-dot ${
                      idx === currentImageIndex ? "active" : ""
                    }`}
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
          <a
            href={project.demo}
            className="project-link"
            aria-label="Live Demo"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>

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
            Projects
          </span>
          <h2 className="section-title">Featured Work</h2>
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
