import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.a
            href="#"
            className="footer-logo"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="logo-bracket">&lt;</span>
            <span className="logo-text">OK</span>
            <span className="logo-bracket">/&gt;</span>
          </motion.a>

          <motion.div
            className="footer-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="footer-credit">Designed & Built by Omkar Kale</p>
            <p className="footer-copyright">
              © {currentYear} Omkar Kale. All rights reserved.
            </p>
          </motion.div>

          <motion.button
            className="scroll-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
