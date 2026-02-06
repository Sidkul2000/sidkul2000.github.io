
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Eye, Mail, Github, User } from 'lucide-react';

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleDownload = () => {
    // Log for debugging
    console.log('Downloading resume...');
    // Navigate to the Google Drive file
    window.open('https://drive.google.com/file/d/1OsS4WKxfezO7dK1B8zyqNP6J-2CxUwyo/view?usp=sharing', '_blank');
  };

  const resumeData = {
    personal: {
      name: "Siddhant Kulkarni",
      title: "AI Engineer & Data Scientist",
      email: "sidkul2000@gmail.com",
      phone: "+1 (347) 646-9459",
      location: "New York, NY",
      website: "github.com/Sidkul2000",
    },
    summary: "AI Engineer with 1+ years of expertise in machine learning, deep learning, and cloud technologies. Proven track record of building end-to-end AI solutions from research to production deployment, with experience in financial services, education, and tech industries.",
    experience: [
      {
        title: "AI Engineer",
        company: "Seawolf AI",
        period: "February 2025 - Present",
        achievements: [
          "Engineered end-to-end automated document extraction pipeline leveraging AWS Bedrock LLMs",
          "Managed scalable cloud deployment using Terraform for EKS cluster configuration",
          "Utilized Skaffold for streamlined local development and testing cycles"
        ]
      },
      {
        title: "LLM Development Team Member",
        company: "New York University - VIP",
        period: "August 2024 - January 2025",
        achievements: [
          "Developed time series forecasting models achieving RMSE scores of 51.4 for GPT-2",
          "Presented findings on LLM-based forecasting and authored detailed reports",
          "Proposed next steps integrating quaternion transformers"
        ]
      },
      {
        title: "Teaching Assistant - NLP",
        company: "NYU Courant Institute",
        period: "August 2024 - January 2025",
        achievements: [
          "Instructed 150 students in NLP covering HMMs, machine translation, sentiment analysis",
          "Coached 8 project groups in developing NLP applications",
          "Guided through POS tagging, NER, and semantic role labeling tasks"
        ]
      },
      {
        title: "AI Intern",
        company: "Systematic Ventures",
        period: "June 2024 - September 2024",
        achievements: [
          "Built automated pipeline extracting data from 3500+ sources",
          "Created semantic search system with 1M+ vector embeddings",
          "Achieved RAGAS score of 0.72 for retrieval accuracy"
        ]
      }
    ],
    education: [
      {
        degree: "Master of Science in Computer Science",
        school: "New York University",
        year: "2023-2025"
      },
      {
        degree: "Bachelor of Engineering in Information Technology",
        school: "Pune University",
        year: "2019-2023"
      }
    ],
    skills: [
      "Python", "TensorFlow", "PyTorch", "AWS", "Docker", "Kubernetes",
      "Next.js", "TypeScript", "FastAPI", "Machine Learning", "Deep Learning",
      "NLP", "Computer Vision", "Data Analysis", "Cloud Computing"
    ]
  };

  return (
    <section id="resume" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-4">Resume</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Professional summary and career highlights
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleDownload} className="hover-scale">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            {/* <Button variant="outline" size="lg" className="hover-scale">
              <Eye className="w-4 h-4 mr-2" />
              View Online
            </Button> */}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Personal Info & Contact */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Personal Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h3 className="font-semibold text-lg">{resumeData.personal.name}</h3>
                  <p className="text-primary">{resumeData.personal.title}</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>{resumeData.personal.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    <span>{resumeData.personal.website}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Core Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.map((skill, index) => (
                    <Badge 
                      key={skill}
                      variant="outline" 
                      className={`hover:bg-primary hover:text-primary-foreground transition-colors animate-fade-in`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {resumeData.education.map((edu, index) => (
                  <div key={edu.degree} className={`animate-fade-in`} style={{ animationDelay: `${index * 200}ms` }}>
                    <h4 className="font-semibold">{edu.degree}</h4>
                    <p className="text-sm text-primary">{edu.school}</p>
                    <p className="text-sm text-muted-foreground">{edu.year}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Experience & Summary */}
          <div className={`lg:col-span-2 space-y-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Professional Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{resumeData.summary}</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Professional Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {resumeData.experience.map((exp, index) => (
                  <div 
                    key={exp.title}
                    className={`border-l-2 border-primary/20 pl-4 animate-fade-in`}
                    style={{ animationDelay: `${index * 300}ms` }}
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-lg">{exp.title}</h4>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <Badge variant="outline" className="w-fit mt-1 sm:mt-0">
                        {exp.period}
                      </Badge>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;