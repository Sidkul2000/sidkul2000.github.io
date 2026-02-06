
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    { label: 'Innovation', progress: 95 },
    { label: 'Quality', progress: 90 },
    { label: 'Collaboration', progress: 88 },
    { label: 'Growth', progress: 92 }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a love for creating scalable AI systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <img 
                src="https://github.com/Sidkul2000/sidkul2000.github.io/blob/18fc80076b136dd478a3569c67fac153c8efb99a/img/sid.JPG?raw=true"
                alt="Profile"
                className="rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          <div className={`space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div>
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-4">
                I am an AI Engineer at Seawolf AI, currently building a 0→1 SaaS platform for financial institutions that generates governance KPIs and board-effectiveness profiles across 1M+ filings using FastAPI, React, Postgres on AWS RDS, Gemini-based extraction services on Lambda and ECS Fargate and fully automated cloud infrastructure - giving me deep experience owning architecture, data pipelines and deployment end to end. I have worked with Capital Group to build production-grade AI systems for large-scale investment research and decision-making. At Capital Group, I developed an AI-driven thesis extraction and monitoring engine using GPT-4o, delivering automated insights to 9,000+ analysts and 300+ portfolio managers with over 92% precision and engineered real-time market signal pipelines that reduced research turnaround from days to minutes. Previously, I worked at Jefferies Group LLC, where I built and automated scalable document extraction systems using AWS LLMs, Terraform-managed EKS and robust CI/CD pipelines. I bring over a year of hands-on experience across Machine Learning, Deep Learning, NLP and LLM-based systems, with a strong focus on building reliable, scalable AI for real-world impact.
              </p>
              <p className="text-muted-foreground">
                As a Master's student in Computer Science at NYU, I'm deepening my expertise in ML, Big Data Analytics and complex Data Visualization. My coursework covers advanced topics in Neural networks, Computer Vision and NLP, utilizing technologies like PyTorch, TensorFlow and Keras. I'm passionate about leveraging LLMs to tackle complex real-world challenges across industries, with a particular focus on scaling AI solutions to create broader societal impact and transform how businesses operate. As a Teaching Assistant for Natural Language Processing, I'm actively involved in guiding students through concepts like Hidden Markov Models, Machine Translation and Sentiment Analysis, further solidifying my understanding of these crucial AI technologies.
              </p>
            </div>

            {/* <div>
              <h4 className="text-xl font-semibold mb-6">Core Values</h4>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={value.label} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${700 + index * 100}ms` }}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{value.label}</span>
                      <span className="text-sm text-muted-foreground">{value.progress}%</span>
                    </div>
                    <Progress value={isVisible ? value.progress : 0} className="transition-all duration-1000" />
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
