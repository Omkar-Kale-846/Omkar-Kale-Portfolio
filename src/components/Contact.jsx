import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import SplitTitle from "./SplitTitle";
import "./Contact.css";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  const contactInfo = [
    {
      name: "Email",
      icon: Mail,
      value: "omkarkale846@gmail.com",
      link: "mailto:omkarkale846@gmail.com",
    },
    {
      name: "Phone",
      icon: Phone,
      value: "+91 80874 51784",
      link: "tel:+918087451784",
    },
    {
      name: "Location",
      icon: MapPin,
      value: "Pune, Maharashtra, India",
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/kale-omkar/",
      username: "kale-omkar",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/kale-omkar/",
      username: "kale-omkar",
    },
  ];

  return (
    <section className="contact section" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <span className="section-tag">
            <Mail size={16} />
            {"<Contact />"}
          </span>
          <SplitTitle className="section-title">Get In Touch</SplitTitle>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="contact-description"
        >
          I'm currently looking for new opportunities, so if you've got a
          question, a project in mind, or just want to say hi, I'd love to
          hear from you.
        </motion.p>

        <div className="contact-cards">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="contact-card"
            >
              <div className="contact-card-icon">
                <info.icon size={24} />
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">{info.name}</span>
                {info.link ? (
                  <a href={info.link} className="contact-card-value">
                    {info.value}
                    <ArrowUpRight size={14} className="arrow-icon" />
                  </a>
                ) : (
                  <span className="contact-card-value">{info.value}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="contact-social-section">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="contact-social-title"
          >
            Connect With Me
          </motion.h3>
          <div className="contact-social-cards">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="social-card"
              >
                <div className="social-card-icon">
                  <social.icon size={28} />
                </div>
                <div className="social-card-content">
                  <span className="social-card-name">{social.name}</span>
                  <span className="social-card-username">
                    @{social.username}
                  </span>
                </div>
                <ArrowUpRight size={18} className="social-card-arrow" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
