import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050816]">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Philosophy />
      <Contact />
    </div>
  );
}
