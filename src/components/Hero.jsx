import { motion } from "framer-motion";
import { Download, FolderOpen, Github, Linkedin, MapPin } from "lucide-react";
import profileImg from "../assets/project-images/image.png";
import MagneticButton from "./MagneticButton";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-layout"
        >
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hero-image-wrapper"
          >
            <img src={profileImg} alt="Omkar Kale" className="hero-image" />
          </motion.div>

          {/* Text content */}
          <div className="hero-text-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="status-badge"
            >
              <span className="status-dot"></span>
              Available for work!
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="hero-location"
            >
              <MapPin size={16} />
              Based in Pune, Maharashtra. Open to relocating.
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="hero-name"
            >
              <span className="gradient-text">Omkar Kale</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="hero-title"
            >
              Full-Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="hero-tagline"
            >
              I build full-stack apps, from React interfaces to the AI/ML
              underneath.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="hero-buttons"
            >
              <MagneticButton
                href={import.meta.env.BASE_URL + "/resume.pdf"}
                download="Omkar_Kale_Resume.pdf"
                className="btn btn-primary"
              >
                <Download size={18} />
                Download Resume
              </MagneticButton>
              <MagneticButton href="#projects" className="btn btn-secondary">
                <FolderOpen size={18} />
                View Projects
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="hero-socials"
            >
              <a
                href="https://github.com/Omkar-Kale-846"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/omkar-kale-948101287/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
