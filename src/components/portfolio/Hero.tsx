import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Mail } from 'lucide-react';

const roles = [
  'AI Platform Engineer',
  'Building LLM Pipelines',
  'Cloud & Data Architecture',
  'Full-Stack AI Systems',
];

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typing animation
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
          if (displayText.length === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-background">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[100px] transition-all duration-700 ease-out"
          style={{
            background: 'linear-gradient(135deg, hsl(217 91% 60%), hsl(199 89% 48%))',
            left: `calc(20% + ${mousePosition.x * 0.02}px)`,
            top: `calc(20% + ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-[80px] transition-all duration-1000 ease-out"
          style={{
            background: 'linear-gradient(135deg, hsl(262 83% 68%), hsl(217 91% 60%))',
            right: `calc(10% + ${mousePosition.x * -0.01}px)`,
            bottom: `calc(20% + ${mousePosition.y * -0.01}px)`,
          }}
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(217 91% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(217 91% 60%) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
      >
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text"
        >
          Siddhant Kulkarni
        </motion.h1>

        <motion.div variants={item} className="text-xl md:text-2xl text-muted-foreground mb-4 h-8">
          <span>{displayText}</span>
          <span className="animate-pulse text-primary">|</span>
        </motion.div>

        <motion.p variants={item} className="text-lg text-muted-foreground/80 mb-10 max-w-2xl mx-auto">
          NYU CS Alum building scalable AI solutions for financial institutions.
          <br className="hidden sm:block" />
          From data pipelines to cloud deployment — engineering intelligent systems end to end.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="group relative overflow-hidden"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="border-primary/30 hover:bg-primary/10 hover:border-primary/50"
          >
            <Mail className="w-4 h-4 mr-2" />
            Get In Touch
          </Button>
          <Button variant="ghost" size="lg" className="hover:bg-primary/10" asChild>
            <a href="https://github.com/Sidkul2000/" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <ArrowDown className="w-6 h-6 animate-bounce text-muted-foreground hover:text-primary transition-colors" />
      </motion.div>
    </section>
  );
};

export default Hero;
