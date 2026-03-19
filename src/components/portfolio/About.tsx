import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/animations/AnimatedSection';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto relative">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI Engineer building scalable systems for real-world impact
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection variant="fade-left">
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="https://github.com/Sidkul2000/sidkul2000.github.io/blob/18fc80076b136dd478a3569c67fac153c8efb99a/img/sid.JPG?raw=true"
                alt="Siddhant Kulkarni"
                className="relative rounded-xl shadow-2xl w-full object-cover"
              />
            </motion.div>
          </AnimatedSection>

          <AnimatedSection variant="fade-right" delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold gradient-text inline-block">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                I am an AI Engineer at Seawolf AI, currently building a 0-to-1 SaaS platform for financial
                institutions that generates governance KPIs and board-effectiveness profiles across 1M+ filings
                using FastAPI, React, Postgres on AWS RDS, Gemini-based extraction services on Lambda and ECS
                Fargate and fully automated cloud infrastructure — giving me deep experience owning architecture,
                data pipelines and deployment end to end.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I have worked with Capital Group to build production-grade AI systems for large-scale investment
                research and decision-making, delivering automated insights to 9,000+ analysts and 300+ portfolio
                managers with over 92% precision. Previously at Jefferies Group LLC, I built and automated scalable
                document extraction systems using AWS LLMs, Terraform-managed EKS and robust CI/CD pipelines.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a Master's graduate in Computer Science at NYU, my expertise spans ML, Big Data Analytics and
                NLP. I'm passionate about leveraging LLMs to tackle complex real-world challenges, with a focus on
                scaling AI solutions to create broader societal impact.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { value: '5+', label: 'Companies' },
                  { value: '1M+', label: 'Documents Processed' },
                  { value: '92%', label: 'Model Precision' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-3 rounded-lg bg-secondary/30">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
