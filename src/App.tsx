import { LangProvider } from './lib/i18n';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { SectionIndex } from './components/layout/SectionIndex';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <LangProvider>
      <SectionIndex />
      <Navbar />
      <main>
        <Hero />
        <div
          aria-hidden
          className="max-w-wide mx-auto px-6 md:px-12 lg:px-20"
        >
          <div className="h-px bg-ink/15" />
        </div>
        <About />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  );
}
