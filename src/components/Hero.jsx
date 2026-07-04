import { motion } from "framer-motion";
import { Download, FolderOpen, Github, Linkedin } from "lucide-react";
import profileImg from "../assets/image.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-content"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="hero-image-wrapper"
          >
            <img src={profileImg} alt="Omkar Kale" className="hero-image" />
          </motion.div>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="status-badge"
          >
            <span className="status-dot"></span>
            Available for work!
          </motion.div>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="hero-location-text"
          >
            Currently based in Pune, Maharashtra — open to relocate
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="hero-name"
          >
            Hi I'm <span className="gradient-text">Omkar Kale</span> – Full
            Stack Developer & AI Enthusiast.
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="hero-tagline"
          >
            Transforming complex challenges into elegant, AI-driven solutions
            that scale.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="hero-buttons"
          >
            <a
              href="https://drive.google.com/drive/folders/197hiZQEM782cCknwqz4RNera485g9CTw?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a href="#projects" className="btn btn-secondary">
              <FolderOpen size={18} />
              View Projects
            </a>
          </motion.div>

          {/* Social Links */}
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
