import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, Code2, GraduationCap } from "lucide-react";
import SplitTitle from "./SplitTitle";
import "./About.css";

// Tech stack grouped to match the categories from the resume
const techStackGroups = [
  {
    category: "Languages",
    items: [
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
    ],
  },
  {
    category: "Web Development",
    items: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
  },
  {
    category: "AI / ML",
    items: [
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "TensorFlow",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      },
      {
        name: "OpenCV",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
      },
      {
        name: "Google GenAI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
      },
    ],
  },
  {
    category: "Cloud & Tools",
    items: [
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
    ],
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  let techCardIndex = 0;

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <span className="section-tag">
            <User size={16} />
            {"<About />"}
          </span>
          <SplitTitle className="section-title">Know Me Better</SplitTitle>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="about-text-centered"
        >
          <p>
            I got into tech because I like making things people actually use.
            The code is just how I get there.
          </p>
          <p>
            I'm a CS & Design student at DPU, Pune, working toward
            becoming a full-stack developer who ships things that solve real
            problems. Most of what I know, I've picked up by doing rather
            than reading. Hackathons are where that shows the most: I've been
            to enough of them now that finishing as a finalist or winner
            happens more often than not.
          </p>
          <p>
            I don't have years of experience yet. What I have is a habit of
            not stopping until something works.
          </p>
          <p>
            I also spend a lot of time outside my own projects. I run the
            Hackathon Committee as President, which means I spend as much
            time building teams as I do building software, and watching a
            team I put together win feels just as good as shipping code
            myself.
          </p>
          <p>
            When I'm not doing either, I'm probably making tea and queuing up
            a podcast.
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="tech-stack-section"
        >
          <div className="tech-stack-header">
            <Code2 size={18} />
            <span>Tech Stack</span>
          </div>

          {techStackGroups.map((group) => (
            <div key={group.category} className="tech-category">
              <div className="tech-category-title">{group.category}</div>
              <div className="tech-stack-grid">
                {group.items.map((tech) => {
                  const delay = 0.5 + techCardIndex * 0.04;
                  techCardIndex += 1;
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay }}
                      className="tech-card"
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="tech-card-icon"
                      />
                      <span className="tech-card-name">{tech.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="education-section"
        >
          <div className="education-header">
            <GraduationCap size={18} />
            <span>Education</span>
          </div>
          <div className="education-timeline">
            {/* B.Tech */}
            <div className="education-item">
              <div className="education-dot"></div>
              <div className="education-line"></div>
              <div className="education-card">
                <div className="education-year">2023 – 2027 (Expected)</div>
                <h3 className="education-degree">
                  B.Tech in Computer Science and Design
                </h3>
                <p className="education-institution">
                  Dr. D. Y. Patil Vidyapeeth, School of Science and Technology
                </p>
                <span className="education-score">CGPA: 9.8 / 10.0</span>
              </div>
            </div>
            {/* HSC */}
            <div className="education-item">
              <div className="education-dot"></div>
              <div className="education-card">
                <div className="education-year">2021 – 2023</div>
                <h3 className="education-degree">
                  HSC (Class 12) - Science (PCMB)
                </h3>
                <p className="education-institution">
                  MIT Junior College, Pune, Maharashtra
                </p>
                <span className="education-score">Percentage: 75%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
