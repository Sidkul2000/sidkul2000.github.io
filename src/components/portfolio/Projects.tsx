import { useState } from 'react';

type ProjCat = 'ai' | 'data-science' | 'fullstack';
type Project = {
  t: string;
  d: string;
  tech: string[];
  cat: ProjCat;
  url?: string;
  img: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    t: 'TuneTether: Music-Based User Matchmaking',
    d: 'Music-based user matchmaking system that connects individuals through shared music preferences. Analyzes listening habits to provide personalized recommendations.',
    tech: ['Python', 'PySpark', 'OpenAI', 'NodeJS', 'FastAPI'],
    cat: 'fullstack',
    url: 'https://github.com/Sidkul2000/TuneTether',
    img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=500&fit=crop',
    featured: true,
  },
  {
    t: 'Interactive Geospatial Visualization',
    d: 'Analyzed prices and guest review scores of Airbnb listings across London. Visualized preferable neighborhoods based on review scores and pricing.',
    tech: ['Python', 'Seaborn', 'Matplotlib', 'Altair', 'Plotly'],
    cat: 'data-science',
    url: 'https://github.com/Sidkul2000/GeospatialVisualization',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop',
    featured: true,
  },
  {
    t: 'Face Recognition System',
    d: 'Advanced face recognition using VGG16 with 93.4% accuracy. Cascade Classifier for feature extraction and real-time recognition via webcam.',
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'VGG16'],
    cat: 'ai',
    url: 'https://github.com/Sidkul2000/CNN-Projects/blob/master/Face%20Recognition%20(Transfer%20Learning)/FaceRecognition.ipynb',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop',
    featured: true,
  },
  {
    t: 'Car Detection using YOLO',
    d: 'Real-time car detection using YOLO model. Detects cars in images and videos with accurate bounding boxes.',
    tech: ['Python', 'Keras', 'YOLOv4', 'scikit-learn'],
    cat: 'ai',
    url: 'https://github.com/Sidkul2000/Coursera-Assignments/blob/master/DeepLearning.ai_Course%20-%204%20-%20Convolutional%20Neural%20Networks/Autonomous_driving_application_Car_detection_v3a.ipynb',
    img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=500&fit=crop',
  },
  {
    t: 'Demand and Revenue Forecasting',
    d: 'Analyzed live data from 80+ food industry businesses. Created boosting algorithm for revenue forecasting with 14% MAPE and 86% precision.',
    tech: ['Python', 'Pandas', 'Sklearn', 'Tableau'],
    cat: 'data-science',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    featured: true,
  },
  {
    t: 'Jazzify: AI-driven Jazz Composition',
    d: 'LSTM-based music composition system trained on 78 jazz pieces. Achieves 94% training accuracy while maintaining authentic jazz harmonics.',
    tech: ['TensorFlow', 'Keras', 'RNN', 'Music21', 'LSTM'],
    cat: 'ai',
    url: 'https://github.com/Sidkul2000/Jazzify',
    img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=500&fit=crop',
    featured: true,
  },
  {
    t: 'StackOverflow Assistant Bot',
    d: 'Conversational chatbot for coding questions with 80% accuracy. Preprocessed 400K sentences using TF-IDF features.',
    tech: ['TfidfVectorizer', 'Starspace', 'ChatterBot'],
    cat: 'ai',
    url: 'https://github.com/Sidkul2000/Stackoverflow_bot',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop',
  },
  {
    t: 'Art Generation with Neural Style Transfer',
    d: 'Neural Style Transfer using VGG19 to blend content and style from different images into artistic outputs.',
    tech: ['Python', 'TensorFlow', 'SciPy', 'VGG19'],
    cat: 'ai',
    url: 'https://github.com/Sidkul2000/Coursera-Assignments/blob/master/DeepLearning.ai_Course%20-%204%20-%20Convolutional%20Neural%20Networks/Art_Generation_with_Neural_Style_Transfer_v3a.ipynb',
    img: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=500&fit=crop',
  },
  {
    t: 'Roomio: Roommate Search Application',
    d: 'Full-stack roommate search app with MySQL backend. 13 modules including advanced search, user sessions, and 20+ SQL queries.',
    tech: ['MySQL', 'Flask', 'HTML', 'CSS', 'JavaScript'],
    cat: 'fullstack',
    url: 'https://github.com/Sidkul2000/PDSProject/',
    img: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=500&fit=crop',
  },
];

const catLabel: Record<ProjCat, string> = {
  ai: 'AI / ML',
  'data-science': 'DATA',
  fullstack: 'FULLSTACK',
};

type Filter = 'all' | ProjCat;

const Projects = () => {
  const [filter, setFilter] = useState<Filter>('all');
  const list = filter === 'all' ? projects : projects.filter((p) => p.cat === filter);

  return (
    <section className="section" id="projects">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <div className="section-label reveal">03 · Build</div>
            <h2 className="section-title reveal d1">Selected projects.</h2>
          </div>
          <p className="section-sub reveal d2">
            A sample of AI, ML and full-stack work. Filter by discipline.
          </p>
        </div>

        <div className="proj-filter reveal d1">
          {(['all', 'ai', 'data-science', 'fullstack'] as Filter[]).map((f) => (
            <button
              key={f}
              className={filter === f ? 'active' : ''}
              onClick={() => setFilter(f)}
            >
              {f === 'all'
                ? '// all'
                : f === 'ai'
                ? '// ai · ml'
                : f === 'data-science'
                ? '// data'
                : '// fullstack'}
            </button>
          ))}
        </div>

        <div className="proj-grid">
          {list.map((p) => {
            const body = (
              <>
                <div className="proj-media">
                  <span className="proj-cat">{catLabel[p.cat]}</span>
                  {p.featured && <span className="proj-badge">FEATURED</span>}
                  <img src={p.img} alt={p.t} loading="lazy" />
                </div>
                <div className="proj-body">
                  <div className="proj-title">{p.t}</div>
                  <div className="proj-desc">{p.d}</div>
                  <div className="chips">
                    {p.tech.map((x) => (
                      <span className="chip" key={x}>
                        {x}
                      </span>
                    ))}
                  </div>
                  <div className="proj-footer">
                    {p.url ? (
                      <span className="proj-link">VIEW CODE ↗</span>
                    ) : (
                      <span className="proj-link" style={{ color: 'var(--fg-faint)' }}>
                        PRIVATE
                      </span>
                    )}
                  </div>
                </div>
              </>
            );
            return p.url ? (
              <a
                key={p.t}
                className="proj-card reveal in"
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {body}
              </a>
            ) : (
              <div key={p.t} className="proj-card reveal in">
                {body}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
