import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { SectionIndex } from './components/layout/SectionIndex';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';
import { Marquee } from './components/motion/Marquee';

export default function App() {
  return (
    <>
      <SectionIndex />
      <Navbar />
      <main>
        <Hero />
        <Marquee text="MATHIAS BRUFLOT — DATATEKNOLOGI — BERGEN, NO — PORTFOLIO 2026" />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
