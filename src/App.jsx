import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import About from "./components/About";
import ExperienceSection from "./components/Experience";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <div className="divider mx-auto max-w-7xl px-6 md:px-10" />
        <About />
        <div className="divider mx-auto max-w-7xl px-6 md:px-10" />
        <ExperienceSection />
        <div className="divider mx-auto max-w-7xl px-6 md:px-10" />
        <Work />
        <div className="divider mx-auto max-w-7xl px-6 md:px-10" />
        <Skills />
        <div className="divider mx-auto max-w-7xl px-6 md:px-10" />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
