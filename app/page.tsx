import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Workflow from './components/sections/Workflow';
import WhyHireMe from './components/sections/WhyHireMe';
import Philosophy from './components/sections/Philosophy';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050816]">
      <Hero />
      <Services />
      <About />
      <Projects />
      <Skills />
      <Workflow />
      <WhyHireMe />
      <Philosophy />
      <Testimonials />
      <Contact />
    </div>
  );
}
