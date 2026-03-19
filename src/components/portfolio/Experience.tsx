import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/animations/AnimatedSection';

const experiences = [
  {
    title: 'AI Platform Engineer (Data and Cloud)',
    company: 'BEL Capital Advisory LLC (via Seawolf AI)',
    period: 'Nov 2025 - Present',
    description:
      'Architected a production multi-agent LLM pipeline using RAG and Gemini-2 Flash on AWS Lambda/ECS Fargate to transform 1M+ SEC filings into structured governance intelligence for institutional investors.',
    achievements: [
      'Built multi-agent pipeline (retrieval, extraction, evaluation, KPI scoring) generating governance KPIs across 15 years of filings',
      'Designed distributed LLM inference pipelines ingesting EDGAR/FMP feeds into Postgres (RDS) with async workers, supporting 40K+ extractions/day at 1.8s median latency',
      'Reduced inference costs 30% through caching and batching optimizations',
    ],
    skills: ['FastAPI', 'React', 'Postgres', 'AWS RDS', 'Gemini', 'Lambda', 'ECS Fargate', 'RAG'],
  },
  {
    title: 'AI Engineer',
    company: 'Capital Group (via Seawolf AI)',
    period: 'Jun 2025 - Nov 2025',
    description:
      'Developed a production agent research assistant using GPT-4o that synthesized financial filings into investment theses, monitoring signals and automated research briefs.',
    achievements: [
      'Delivered automated insights to 9,000+ analysts and 300+ portfolio managers with 92.4% precision / 89.7% recall',
      'Engineered real-time financial signal pipelines using AWS, Redis streams and DynamoDB',
      'Reduced research turnaround from hours to minutes with 2s inference latency',
    ],
    skills: ['GPT-4o', 'Azure AI Foundry', 'AWS', 'Redis', 'DynamoDB', 'Python'],
  },
  {
    title: 'AI Engineer Intern',
    company: 'Jefferies Group LLC (via Seawolf AI)',
    period: 'Feb 2025 - May 2025',
    description:
      'Implemented an LLM document intelligence pipeline using Claude 3.5 Sonnet (AWS Bedrock) with Lambda, S3, SQS and DynamoDB.',
    achievements: [
      'Built end-to-end automated document extraction pipeline leveraging AWS Bedrock LLMs',
      'Operationalized the platform on Kubernetes (EKS) with Terraform and Bamboo CI/CD pipelines',
      'Scaled ingestion capacity to 10K+ documents per day with 87.8% extraction accuracy',
    ],
    skills: ['AWS Bedrock', 'Lambda', 'S3', 'SQS', 'DynamoDB', 'Terraform', 'EKS', 'CI/CD'],
  },
  {
    title: 'AI Engineer Intern',
    company: 'Siemens Digital Industries Software',
    period: 'Jun 2024 - Aug 2024',
    description:
      'Optimized GPU-based LLM inference pipelines for CodeLlama 34B/70B, improving latency and throughput for AI-assisted code understanding.',
    achievements: [
      'Enhanced syntax error accuracy and logical error detection using CodeLlama models across large-scale C++ enterprise codebases',
      'Performed Static Code Analysis for C++ with Coverity',
      'Created 15+ custom checkers in Codexm, boosting code maintainability by 20%',
    ],
    skills: ['CodeLlama', 'C++', 'Coverity', 'GPU Optimization', 'Python'],
  },
  {
    title: 'AI Engineer Intern',
    company: 'Systematic Ventures',
    period: 'Jun 2024 - Aug 2024',
    description:
      'Built a RAG-based financial intelligence system combining web scraping, embeddings and FAISS semantic search.',
    achievements: [
      'Retrieved insights across 3,500+ datasets for investment analysis workflows',
      'Implemented a vector search index storing 1M+ embeddings',
      'Achieved RAGAS evaluation score of 0.72',
    ],
    skills: ['RAG', 'LangChain', 'FAISS', 'Vector Embeddings', 'Python', 'BeautifulSoup'],
  },
];

const activities = [
  {
    title: 'Teaching Assistant - Natural Language Processing',
    company: 'NYU Courant',
    period: 'Sep 2024 - Jan 2025',
    description:
      'Taught 150 students NLP and supervised 9 project teams implementing HMMs, MT systems, POS/NER pipelines, semantic role labeling using NLTK and spaCy.',
  },
  {
    title: 'Member - Vertically Integrated Projects',
    company: 'NYU',
    period: 'Sep 2024 - Dec 2025',
    description:
      'Developed time-series forecasting models (GPT-2, T5, Llama-2, LSTM) optimized for real-time inference efficiency on edge devices.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground">
            Building impactful AI solutions across financial services
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px w-0.5 h-full bg-gradient-to-b from-primary via-accent to-primary/20" />

          <StaggerContainer className="space-y-12" staggerDelay={0.15}>
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <StaggerItem key={`${exp.company}-${index}`}>
                  <div className="relative">
                    {/* Timeline dot */}
                    <motion.div
                      className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background bg-primary z-10 glow"
                      whileInView={{ scale: [0, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                    />

                    <div className={`grid md:grid-cols-2 gap-8 pl-16 md:pl-0`}>
                      {!isLeft && <div className="hidden md:block" />}
                      <div className={isLeft ? 'md:pr-12' : 'md:pl-12'}>
                        <motion.div
                          whileHover={{ y: -4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Card className="border-border/50 hover:border-primary/30 hover:glow transition-all duration-300 bg-card/50 backdrop-blur-sm">
                            <CardHeader className="pb-3">
                              <div className="flex items-center justify-between flex-wrap gap-2">
                                <Badge variant="outline" className="text-xs text-primary border-primary/30">
                                  {exp.period}
                                </Badge>
                              </div>
                              <CardTitle className="text-lg mt-2">{exp.title}</CardTitle>
                              <p className="text-primary font-medium text-sm">{exp.company}</p>
                            </CardHeader>
                            <CardContent>
                              <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>

                              <div className="mb-4">
                                <ul className="text-sm text-muted-foreground space-y-2">
                                  {exp.achievements.map((a, i) => (
                                    <li key={i} className="flex items-start">
                                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0" />
                                      {a}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="flex flex-wrap gap-1.5">
                                {exp.skills.map((skill) => (
                                  <Badge
                                    key={skill}
                                    variant="secondary"
                                    className="text-xs bg-secondary/50 hover:bg-primary/20 transition-colors"
                                  >
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </div>
                      {isLeft && <div className="hidden md:block" />}
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* Activities */}
        <AnimatedSection className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">Activities</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((act, index) => (
              <AnimatedSection key={act.title} delay={index * 0.1}>
                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 bg-card/50 backdrop-blur-sm h-full">
                    <CardHeader className="pb-2">
                      <Badge variant="outline" className="w-fit text-xs text-primary border-primary/30 mb-1">
                        {act.period}
                      </Badge>
                      <CardTitle className="text-base">{act.title}</CardTitle>
                      <p className="text-primary font-medium text-sm">{act.company}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{act.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Experience;
