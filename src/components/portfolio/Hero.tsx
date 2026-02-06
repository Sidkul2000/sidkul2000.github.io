
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Mail } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-pulse"
          style={{
            left: mousePosition.x * 0.05,
            top: mousePosition.y * 0.05,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full bg-accent/30 blur-2xl animate-pulse delay-1000"
          style={{
            right: mousePosition.x * 0.03,
            bottom: mousePosition.y * 0.03,
            transition: 'all 0.5s ease-out'
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Siddhant Kulkarni
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 overflow-hidden">
            <p className="animate-fade-in delay-500">AI Engineer @ Seawolf AI | NYU Alum | MS in Computer Science</p>
          </div>
          
          <p className={`text-lg mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Building Scalable AI Solutions with LLMs and RAG for Real-World Impact.
            <br></br>
            From Data to Cloud — Engineering the Future of Intelligent Systems.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <Button size="lg" onClick={() => scrollToSection('projects')} className="hover-scale">
              View My Work
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')} className="hover-scale">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button variant="ghost" size="lg" className="hover-scale" asChild>
              <a href="https://github.com/Sidkul2000/" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
        
        <div 
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          onClick={() => scrollToSection('about')}
        >
          <ArrowDown className="w-6 h-6 animate-bounce cursor-pointer hover:text-primary transition-colors" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
