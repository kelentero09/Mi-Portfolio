import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Services } from './sections/Services';
import { Process } from './sections/Process';
import { GithubSection } from './sections/GithubSection';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { StructuredData } from './components/StructuredData';

export default function App() {
  return (
    <>
      <StructuredData />
      <a
        href="#main"
        className="sr-only rounded-full bg-fg px-4 py-2 text-sm font-medium text-surface focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60]"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Process />
        <GithubSection />
        <Contact />
      </main>

      <Footer />
    </>
  );
}