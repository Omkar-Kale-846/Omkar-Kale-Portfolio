import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin } from "lucide-react";
import "./Header.css";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Hackathons", href: "#hackathons" },
  { name: "Leadership", href: "#leadership" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => ({
        name: link.name,
        element: document.querySelector(link.href),
      }));

      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveLink(section.name);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="header"
    >
      <div className="header-inner">
        <a href="#hero" className="header-logo" aria-label="Home">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">OK</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        <nav className="nav-pill">
        {/* Desktop Navigation */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`nav-link ${
                  activeLink === link.name ? "active" : ""
                }`}
                onClick={() => setActiveLink(link.name)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Links */}
        <div className="nav-social-links">
          <a
            href="https://github.com/Omkar-Kale-846"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social-link"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/omkar-kale-948101287/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mobile-nav"
        >
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`mobile-nav-link ${
                    activeLink === link.name ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveLink(link.name);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-social-links">
            <a
              href="https://github.com/Omkar-Kale-846"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-link"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/omkar-kale-948101287/"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
