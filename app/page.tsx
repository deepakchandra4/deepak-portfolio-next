import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Philosophy from './components/sections/Philosophy';
import Contact from './components/sections/Contact';

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
