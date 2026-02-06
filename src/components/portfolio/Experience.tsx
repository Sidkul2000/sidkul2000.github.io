import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "AI Engineer",
      company: "Seawolf AI",
      period: "February 2025 - Present",
      description: "Worked for financial institutions like Jefferies and Capital Group developing AI-powered solutions for financial services..",
      skills: ["AWS Bedrock", "Lambda", "S3", "SQS", "DynamoDB", "Next.js", "Node.js", "TypeScript", "FastAPI", "Terraform", "EKS", "Bamboo CI/CD", "Skaffold"],
      achievements: [
        "Engineered an end-to-end automated document extraction pipeline leveraging AWS Bedrock LLMs",
        "Managed scalable cloud deployment using Terraform for EKS cluster configuration",
        "Utilized Skaffold for streamlined local development and testing cycles"
      ],
      stats: { projects: 2, impact: "End-to-end automation", team: 6 }
    },
    {
      title: "LLM Development Team Member",
      company: "Vertically Integrated Projects, New York University",
      period: "August 2024 - January 2025",
      description: "Member of Large Language Model Development Team focusing on time series forecasting and financial applications.",
      skills: ["GPT-2", "T5", "LLAMA-2", "LSTM", "ARIMA", "XGBoost", "Python", "Machine Learning"],
      achievements: [
        "Developed time series forecasting models achieving RMSE scores of 51.4 for GPT-2",
        "Presented findings on LLM-based forecasting and authored detailed reports",
        "Proposed next steps integrating quaternion transformers"
      ],
      stats: { projects: 3, impact: "51.4 RMSE score", team: 8 }
    },
    {
      title: "Teaching Assistant for Natural Language Processing",
      company: "New York University, Courant Institute",
      period: "August 2024 - January 2025",
      description: "Instructed students in NLP concepts and guided project development in natural language processing applications.",
      skills: ["NLP", "Hidden Markov Models", "Machine Translation", "NLTK", "spaCy", "Python", "Teaching"],
      achievements: [
        "Instructed 150 students in NLP covering HMMs, machine translation, and sentiment analysis",
        "Coached 8 project groups in developing NLP applications",
        "Guided through POS tagging, NER, and semantic role labeling tasks"
      ],
      stats: { projects: 8, impact: "150 students taught", team: 150 }
    },
    {
      title: "AI Intern",
      company: "Systematic Ventures",
      period: "June 2024 - September 2024",
      description: "Devised automated pipelines for data extraction and analysis using RAG and LangChain.",
      skills: ["RAG", "LangChain", "BeautifulSoup", "FAISS", "Vector Embeddings", "Python", "Data Analysis"],
      achievements: [
        "Built automated pipeline extracting data from 3500+ sources",
        "Created semantic search system with 1M+ vector embeddings",
        "Achieved RAGAS score of 0.72 for retrieval accuracy"
      ],
      stats: { projects: 2, impact: "3500+ sources analyzed", team: 2 }
    },
    {
      title: "AI Intern",
      company: "Siemens Digital Industries Software",
      period: "June 2024 - August 2024",
      description: "Led debugging and development using Codellama 34B and 70B models for optimized GPU performance.",
      skills: ["Codellama 34B", "Codellama 70B", "C++", "Coverity", "Static Code Analysis", "GPU Optimization"],
      achievements: [
        "Enhanced syntax error accuracy and logical error detection using Codellama models",
        "Performed Static Code Analysis for C++ with Coverity",
        "Created 15+ custom checkers in Codex, boosting code maintainability by 20%"
      ],
      stats: { projects: 3, impact: "20% maintainability boost", team: 5 }
    },
    {
      title: "Engagement Ambassador",
      company: "New York University, Phonathon",
      period: "October 2023 - May 2024",
      description: "Spearheaded NYU fundraising campaigns through targeted outreach and alumni relationship building.",
      skills: ["Fundraising", "Communication", "Alumni Relations", "Campaign Management"],
      achievements: [
        "Secured over $5000 for research and scholarships through targeted outreach",
        "Cultivated alumni relationships resulting in 50+ significant donations",
        "Built enduring philanthropic partnerships with NYU"
      ],
      stats: { projects: 1, impact: "$5000+ raised", team: 45 }
    },
    {
      title: "ML Intern",
      company: "ArrayPointer Pvt. Ltd.",
      period: "February 2022 - May 2022",
      description: "Engineered a Product Recommendation System using Collaborative Filtering with SVD and KNNWithMeans.",
      skills: ["Collaborative Filtering", "SVD", "KNNWithMeans", "Surprise", "SciPy", "Python", "Machine Learning"],
      achievements: [
        "Built Product Recommendation System achieving 92.2% accuracy",
        "Processed dataset of 7.8 million products using advanced ML algorithms",
        "Refined model by tuning hyperparameters, increasing accuracy by 4.7%"
      ],
      stats: { projects: 1, impact: "92.2% accuracy", team: 4 }
    },
    {
      title: "General Secretary",
      company: "Information Technology Students' Association",
      period: "August 2020 - June 2023",
      description: "Led the IT Department's Student Club with 50+ members, organizing diverse technical and non-technical events.",
      skills: ["ReactJS", "Leadership", "Event Management", "Web Development", "Team Management"],
      achievements: [
        "Led IT Department's Student Club with 50+ members",
        "Improved ITSA website using ReactJS, increasing user engagement by 40%",
        "Reduced bounce rates by 20% while managing coding competitions"
      ],
      stats: { projects: 15, impact: "40% engagement boost", team: 50 }
    }
  ];

  console.log("Experience component rendering, isVisible:", isVisible);
  console.log("Number of experiences:", experiences.length);

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground">
            Building impactful solutions across diverse industries
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={`${exp.company}-${index}`}
                className="relative opacity-100"
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left side content - even indices (0, 2, 4...) */}
                  {index % 2 === 0 && (
                    <div className="md:pr-8">
                      <Card 
                        className={`hover:shadow-xl transition-all duration-500 cursor-pointer ${hoveredCard === index ? 'scale-105 shadow-2xl' : ''}`}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <CardHeader>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <p className="text-primary font-semibold">{exp.company}</p>
                          <p className="text-muted-foreground">{exp.period}</p>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">{exp.description}</p>
                          
                          <div className="mb-4">
                            <h4 className="font-semibold mb-2">Key Achievements:</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {exp.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mb-4">
                            <h4 className="font-semibold mb-2">Technologies:</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill) => (
                                <Badge key={skill} variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {hoveredCard === index && (
                            <div className="grid grid-cols-3 gap-4 pt-4 border-t animate-fade-in">
                              <div className="text-center">
                                <p className="text-2xl font-bold text-primary">{exp.stats.projects}</p>
                                <p className="text-xs text-muted-foreground">Projects</p>
                              </div>
                              <div className="text-center">
                                <p className="text-sm font-semibold text-primary">{exp.stats.impact}</p>
                                <p className="text-xs text-muted-foreground">Impact</p>
                              </div>
                              <div className="text-center">
                                <p className="text-2xl font-bold text-primary">{exp.stats.team}</p>
                                <p className="text-xs text-muted-foreground">Team Size</p>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  )}
                  
                  {/* Empty space for left side when content is on right */}
                  {index % 2 === 1 && <div></div>}
                  
                  {/* Right side content - odd indices (1, 3, 5...) */}
                  {index % 2 === 1 && (
                    <div className="md:pl-8">
                      <Card 
                        className={`hover:shadow-xl transition-all duration-500 cursor-pointer ${hoveredCard === index ? 'scale-105 shadow-2xl' : ''}`}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <CardHeader>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <p className="text-primary font-semibold">{exp.company}</p>
                          <p className="text-muted-foreground">{exp.period}</p>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">{exp.description}</p>
                          
                          <div className="mb-4">
                            <h4 className="font-semibold mb-2">Key Achievements:</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {exp.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mb-4">
                            <h4 className="font-semibold mb-2">Technologies:</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill) => (
                                <Badge key={skill} variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {hoveredCard === index && (
                            <div className="grid grid-cols-3 gap-4 pt-4 border-t animate-fade-in">
                              <div className="text-center">
                                <p className="text-2xl font-bold text-primary">{exp.stats.projects}</p>
                                <p className="text-xs text-muted-foreground">Projects</p>
                              </div>
                              <div className="text-center">
                                <p className="text-sm font-semibold text-primary">{exp.stats.impact}</p>
                                <p className="text-xs text-muted-foreground">Impact</p>
                              </div>
                              <div className="text-center">
                                <p className="text-2xl font-bold text-primary">{exp.stats.team}</p>
                                <p className="text-xs text-muted-foreground">Team Size</p>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  )}
                  
                  {/* Empty space for right side when content is on left */}
                  {index % 2 === 0 && <div></div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;