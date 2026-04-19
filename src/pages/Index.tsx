import { useReveal } from '@/hooks/useReveal';
import Preloader from '@/components/portfolio/Preloader';
import CustomCursor from '@/components/portfolio/CustomCursor';
import Background from '@/components/portfolio/Background';
import Navbar from '@/components/portfolio/Navbar';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Experience from '@/components/portfolio/Experience';
import Projects from '@/components/portfolio/Projects';
import Skills from '@/components/portfolio/Skills';
import Education from '@/components/portfolio/Education';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';

const Index = () => {
  useReveal();

  return (
    <>
      <Preloader />
      <CustomCursor />
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
