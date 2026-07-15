import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Hackathons from "./components/Hackathons";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
// Lenis (SmoothScroll) was confirmed to break Framer Motion's useInView
// reveals across the site — removed rather than re-introduced. Native
// scroll-behavior: smooth in index.css still handles anchor-link scrolling.

function App() {
  return (
    <>
      <ParticleBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Hackathons />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
