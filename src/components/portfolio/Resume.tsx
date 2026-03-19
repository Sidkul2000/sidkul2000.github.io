import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Mail, Github, User } from 'lucide-react';
import { AnimatedSection } from '@/components/animations/AnimatedSection';

const resumeData = {
  personal: {
    name: 'Siddhant Kulkarni',
    title: 'AI Platform Engineer',
    email: 'sidkul2000@gmail.com',
    phone: '+1 (347) 646-9459',
    location: 'New York, NY',
    website: 'github.com/Sidkul2000',
  },
  summary:
    'AI Platform Engineer with expertise in building production multi-agent LLM pipelines, cloud infrastructure, and data-intensive systems. Track record of delivering end-to-end AI solutions at BEL Capital Advisory, Capital Group, and Jefferies, processing 1M+ financial documents with high precision. Deep experience across ML, NLP, and cloud-native architectures.',
  experience: [
    {
      title: 'AI Platform Engineer (Data and Cloud)',
      company: 'BEL Capital Advisory LLC (via Seawolf AI)',
      period: 'Nov 2025 - Present',
      achievements: [
        'Architected production multi-agent LLM pipeline using RAG and Gemini-2 Flash on AWS Lambda/ECS Fargate',
        'Designed distributed pipelines supporting 40K+ document extractions/day at 1.8s median latency',
        'Reduced inference costs 30% through caching and batching optimizations',
      ],
    },
    {
      title: 'AI Engineer',
      company: 'Capital Group (via Seawolf AI)',
      period: 'Jun 2025 - Nov 2025',
      achievements: [
        'Built production agent research assistant using GPT-4o for 9,000+ analysts and 300+ PMs',
        'Achieved 92.4% precision / 89.7% recall on financial signal extraction',
        'Engineered real-time pipelines with AWS, Redis streams and DynamoDB',
      ],
    },
    {
      title: 'AI Engineer Intern',
      company: 'Jefferies Group LLC (via Seawolf AI)',
      period: 'Feb 2025 - May 2025',
      achievements: [
        'Implemented LLM document intelligence pipeline using Claude 3.5 Sonnet (AWS Bedrock)',
        'Operationalized platform on Kubernetes (EKS) with Terraform and Bamboo CI/CD',
        'Scaled ingestion to 10K+ documents/day with 87.8% extraction accuracy',
      ],
    },
    {
      title: 'AI Engineer Intern',
      company: 'Siemens Digital Industries Software',
      period: 'Jun 2024 - Aug 2024',
      achievements: [
        'Optimized GPU-based LLM inference pipelines for CodeLlama 34B/70B',
        'Performed Static Code Analysis for C++ with Coverity, 15+ custom checkers',
      ],
    },
    {
      title: 'AI Engineer Intern',
      company: 'Systematic Ventures',
      period: 'Jun 2024 - Aug 2024',
      achievements: [
        'Built RAG-based financial intelligence system across 3,500+ datasets',
        'Implemented vector search index storing 1M+ embeddings, RAGAS score 0.72',
      ],
    },
  ],
  education: [
    { degree: "Master's of Science in Computer Science", school: 'New York University', year: '2023-2025' },
    { degree: 'Bachelor of Engineering in Information Technology (Honors AI/ML)', school: 'Savitribai Phule Pune University', year: '2019-2023' },
  ],
  skills: [
    'Python', 'C++', 'Java', 'JavaScript', 'SQL', 'LangChain', 'LangGraph', 'OpenAI API',
    'Azure AI Foundry', 'AWS Bedrock', 'Gemini', 'Llama', 'AWS', 'Redis', 'Postgres',
    'FastAPI', 'Node.js', 'React', 'n8n', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD',
  ],
};

const handleDownload = () => {
  window.open(
    'https://drive.google.com/file/d/1gJlSUdyJfdoQHB7GLQ-dk8RMOcNSHauo/view?usp=sharing',
    '_blank'
  );
};

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-4 relative">
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto relative">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Resume</h2>
          <p className="text-xl text-muted-foreground mb-8">Professional summary and career highlights</p>
          <Button size="lg" onClick={handleDownload} className="group">
            <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
            Download PDF
          </Button>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <AnimatedSection variant="fade-left" className="space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Personal Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h3 className="font-semibold text-lg">{resumeData.personal.name}</h3>
                  <p className="text-primary text-sm">{resumeData.personal.title}</p>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
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

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Core Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {resumeData.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs bg-secondary/50 hover:bg-primary/20 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {resumeData.education.map((edu) => (
                  <div key={edu.degree}>
                    <h4 className="font-semibold text-sm">{edu.degree}</h4>
                    <p className="text-sm text-primary">{edu.school}</p>
                    <p className="text-xs text-muted-foreground">{edu.year}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Right Column */}
          <AnimatedSection variant="fade-right" delay={0.2} className="lg:col-span-2 space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Professional Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{resumeData.summary}</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Professional Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {resumeData.experience.map((exp) => (
                  <div key={`${exp.company}-${exp.period}`} className="border-l-2 border-primary/20 pl-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <div>
                        <h4 className="font-semibold">{exp.title}</h4>
                        <p className="text-primary text-sm font-medium">{exp.company}</p>
                      </div>
                      <Badge variant="outline" className="w-fit mt-1 sm:mt-0 text-xs border-primary/30">
                        {exp.period}
                      </Badge>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {exp.achievements.map((a, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Resume;
