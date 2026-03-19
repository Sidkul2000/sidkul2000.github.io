import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/animations/AnimatedSection';

const skillCategories = [
  {
    title: 'Languages',
    icon: '{ }',
    skills: ['Python', 'C++', 'Java', 'JavaScript', 'SQL'],
  },
  {
    title: 'LLM & GenAI',
    icon: 'AI',
    skills: ['LangChain', 'LangGraph', 'OpenAI API', 'Azure AI Foundry', 'AWS Bedrock', 'Gemini', 'Llama'],
  },
  {
    title: 'Cloud',
    icon: 'C',
    skills: ['AWS Lambda', 'ECS', 'EKS', 'S3', 'DynamoDB', 'RDS', 'Redis', 'Postgres'],
  },
  {
    title: 'Frameworks',
    icon: 'F',
    skills: ['FastAPI', 'Node.js', 'React', 'n8n'],
  },
  {
    title: 'Infrastructure',
    icon: 'I',
    skills: ['Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
  },
];

const stats = [
  { value: '25+', label: 'Projects Completed' },
  { value: '2+', label: 'Years Experience' },
  { value: '20+', label: 'Technologies' },
  { value: '5+', label: 'Companies Worked' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto relative">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground">
            Technologies and tools I work with
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" staggerDelay={0.1}>
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Card className="h-full border-border/50 hover:border-primary/30 hover:glow transition-all duration-300 bg-card/50 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-mono font-bold text-sm">
                        {category.icon}
                      </div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all duration-200 cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Stats */}
        <AnimatedSection delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 rounded-xl bg-secondary/20 border border-border/50"
                whileHover={{ scale: 1.05, borderColor: 'hsl(217 91% 60% / 0.3)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;
