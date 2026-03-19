import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/animations/AnimatedSection';

const education = [
  {
    degree: "Master's of Science in Computer Science",
    school: 'New York University',
    year: '2023 - 2025',
    gpa: '3.68/4.0',
    achievements: ['Algorithms', 'Big Data', 'NLP Teaching Assistant', 'AI/ML Focus'],
  },
  {
    degree: 'Bachelor of Engineering in Information Technology',
    school: 'Savitribai Phule Pune University',
    year: '2019 - 2023',
    gpa: '9.38/10',
    achievements: ['Honors in AI & ML', 'General Secretary of Student Club'],
  },
];

const certifications = [
  { name: 'Google Cloud Certification', issuer: 'Google', year: '2022' },
  { name: '5 Course Specialization in Deep Learning', issuer: 'Deeplearning.ai', year: '2021' },
  { name: 'Building Transformer Based NLP Applications', issuer: 'Nvidia', year: '2021' },
  { name: 'Natural Language Processing', issuer: 'National Research University', year: '2021' },
  { name: 'Python Data Structures', issuer: 'University of Michigan', year: '2019' },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education & Learning</h2>
          <p className="text-xl text-muted-foreground">Continuous learning and academic excellence</p>
        </AnimatedSection>

        <StaggerContainer className="grid lg:grid-cols-2 gap-8 mb-16" staggerDelay={0.15}>
          {education.map((edu) => (
            <StaggerItem key={edu.degree}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Card className="h-full border-border/50 hover:border-primary/30 hover:glow transition-all duration-300 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <p className="text-primary font-semibold">{edu.school}</p>
                    <p className="text-muted-foreground text-sm">{edu.year}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-sm">GPA</span>
                        <span className="text-primary font-semibold">{edu.gpa}</span>
                      </div>
                      <div className="w-full h-2 bg-secondary/50 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((a) => (
                        <Badge key={a} variant="secondary" className="bg-secondary/50 text-xs">
                          {a}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.3}>
          <h3 className="text-2xl font-bold text-center mb-8">Certifications</h3>
          <StaggerContainer className="grid md:grid-cols-3 lg:grid-cols-5 gap-4" staggerDelay={0.08}>
            {certifications.map((cert) => (
              <StaggerItem key={cert.name}>
                <motion.div whileHover={{ y: -2, scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Card className="text-center border-border/50 hover:border-primary/30 transition-all duration-300 bg-card/50 backdrop-blur-sm h-full">
                    <CardContent className="pt-6 px-4">
                      <h4 className="font-semibold text-sm mb-2 leading-tight">{cert.name}</h4>
                      <p className="text-xs text-muted-foreground mb-1">{cert.issuer}</p>
                      <p className="text-xs text-primary">{cert.year}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Education;
