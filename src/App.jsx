import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";

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
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
