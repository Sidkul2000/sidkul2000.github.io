import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Filter } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/animations/AnimatedSection';

const projects = [
  {
    title: 'TuneTether: Music-Based User Matchmaking',
    description:
      'Music-based user matchmaking system that connects individuals through shared music preferences. Analyzes listening habits to provide personalized recommendations.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop',
    category: 'fullstack',
    technologies: ['Python', 'PySpark', 'OpenAI', 'NodeJS', 'FastAPI'],
    githubUrl: 'https://github.com/Sidkul2000/TuneTether',
    featured: true,
  },
  {
    title: 'Interactive Geospatial Visualization',
    description:
      'Analyzed prices and guest review scores of Airbnb listings across London. Visualized preferable neighborhoods based on review scores and pricing.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    category: 'data-science',
    technologies: ['Python', 'Seaborn', 'Matplotlib', 'Altair', 'Plotly'],
    githubUrl: 'https://github.com/Sidkul2000/GeospatialVisualization',
    featured: true,
  },
  {
    title: 'Face Recognition System',
    description:
      'Advanced face recognition using VGG16 with 93.4% accuracy. Cascade Classifier for feature extraction and real-time recognition via webcam.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
    category: 'ai',
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'VGG16'],
    githubUrl:
      'https://github.com/Sidkul2000/CNN-Projects/blob/master/Face%20Recognition%20(Transfer%20Learning)/FaceRecognition.ipynb',
    featured: true,
  },
  {
    title: 'Car Detection using YOLO',
    description:
      'Real-time car detection using YOLO model. Detects cars in images and videos with accurate bounding boxes.',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
    category: 'ai',
    technologies: ['Python', 'Keras', 'YOLOv4', 'scikit-learn'],
    githubUrl:
      'https://github.com/Sidkul2000/Coursera-Assignments/blob/master/DeepLearning.ai_Course%20-%204%20-%20Convolutional%20Neural%20Networks/Autonomous_driving_application_Car_detection_v3a.ipynb',
    featured: false,
  },
  {
    title: 'Demand and Revenue Forecasting',
    description:
      'Analyzed live data from 80+ food industry businesses. Created boosting algorithm for revenue forecasting with 14% MAPE and 86% precision.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    category: 'data-science',
    technologies: ['Python', 'Pandas', 'Sklearn', 'Tableau'],
    githubUrl: '',
    featured: true,
  },
  {
    title: 'Jazzify: AI-driven Jazz Composition',
    description:
      'LSTM-based music composition system trained on 78 jazz pieces. Achieves 94% training accuracy while maintaining authentic jazz harmonics.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
    category: 'ai',
    technologies: ['TensorFlow', 'Keras', 'RNN', 'Music21', 'LSTM'],
    githubUrl: 'https://github.com/Sidkul2000/Jazzify',
    featured: true,
  },
  {
    title: 'StackOverflow Assistant Bot',
    description:
      'Conversational chatbot for coding questions with 80% accuracy. Preprocessed 400K sentences using TF-IDF features.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
    category: 'ai',
    technologies: ['TfidfVectorizer', 'Starspace', 'ChatterBot'],
    githubUrl: 'https://github.com/Sidkul2000/Stackoverflow_bot',
    featured: false,
  },
  {
    title: 'Art Generation with Neural Style Transfer',
    description:
      'Neural Style Transfer using VGG19 to blend content and style from different images into artistic outputs.',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop',
    category: 'ai',
    technologies: ['Python', 'TensorFlow', 'SciPy', 'VGG19'],
    githubUrl:
      'https://github.com/Sidkul2000/Coursera-Assignments/blob/master/DeepLearning.ai_Course%20-%204%20-%20Convolutional%20Neural%20Networks/Art_Generation_with_Neural_Style_Transfer_v3a.ipynb',
    featured: false,
  },
  {
    title: 'Roomio: Roommate Search Application',
    description:
      'Full-stack roommate search app with MySQL backend. 13 modules including advanced search, user sessions, and 20+ SQL queries.',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop',
    category: 'fullstack',
    technologies: ['MySQL', 'Flask', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Sidkul2000/PDSProject/',
    featured: false,
  },
];

const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'fullstack', label: 'Full Stack' },
  { value: 'data-science', label: 'Data Science' },
  { value: 'ai', label: 'AI/ML' },
];

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground mb-8">Showcasing my best work and technical expertise</p>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <Button
                key={cat.value}
                variant={filter === cat.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter(cat.value)}
                className={
                  filter === cat.value
                    ? ''
                    : 'border-border/50 hover:border-primary/50 hover:bg-primary/10'
                }
              >
                <Filter className="w-3.5 h-3.5 mr-1.5" />
                {cat.label}
              </Button>
            ))}
          </div>
        </AnimatedSection>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
                  <Card
                    className={`group overflow-hidden border-border/50 hover:border-primary/30 hover:glow transition-all duration-300 bg-card/50 backdrop-blur-sm h-full ${
                      project.featured ? 'ring-1 ring-primary/20' : ''
                    }`}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                          {project.githubUrl && (
                            <Button size="sm" variant="secondary" className="text-xs" asChild>
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="w-3.5 h-3.5 mr-1" />
                                Code
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                      {project.featured && (
                        <Badge className="absolute top-2 right-2 bg-primary text-xs">Featured</Badge>
                      )}
                    </div>

                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs bg-secondary/50 hover:bg-primary/20 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
