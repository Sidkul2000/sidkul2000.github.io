type XPItem = {
  period: string;
  current?: boolean;
  title: string;
  company: string;
  desc: string;
  bullets?: string[];
  chips?: string[];
};

const items: XPItem[] = [
  {
    period: 'NOV 2025 — PRESENT',
    current: true,
    title: 'AI Platform Engineer · Data & Cloud',
    company: 'BEL Capital Advisory LLC · via Seawolf AI',
    desc: 'Architected a production multi-agent LLM pipeline using RAG and Gemini-2 Flash on AWS Lambda / ECS Fargate — turning 1M+ SEC filings into structured governance intelligence for institutional investors.',
    bullets: [
      'Built retrieval → extraction → evaluation → KPI scoring agents across 15 years of filings',
      '40K+ extractions/day at 1.8s median latency via async workers on RDS',
      'Reduced inference costs 30% through caching and batching',
    ],
    chips: ['FastAPI', 'React', 'Postgres', 'AWS RDS', 'Gemini', 'Lambda', 'ECS Fargate', 'RAG'],
  },
  {
    period: 'JUN 2025 — NOV 2025',
    title: 'AI Engineer',
    company: 'Capital Group · via Seawolf AI',
    desc: 'Production agent research assistant (GPT-4o) that synthesized financial filings into investment theses and monitoring signals.',
    bullets: [
      'Automated insights to 9,000+ analysts and 300+ PMs at 92.4% precision / 89.7% recall',
      'Real-time signal pipelines with AWS, Redis streams, DynamoDB',
      'Research turnaround cut from hours to minutes — 2s inference latency',
    ],
    chips: ['GPT-4o', 'Azure AI Foundry', 'AWS', 'Redis', 'DynamoDB', 'Python'],
  },
  {
    period: 'FEB 2025 — MAY 2025',
    title: 'AI Engineer Intern',
    company: 'Jefferies Group LLC · via Seawolf AI',
    desc: 'LLM document intelligence pipeline with Claude 3.5 Sonnet on Bedrock — Lambda, S3, SQS, DynamoDB.',
    bullets: [
      'End-to-end automated extraction on AWS Bedrock',
      'Kubernetes (EKS) + Terraform + Bamboo CI/CD',
      '10K+ documents/day at 87.8% accuracy',
    ],
    chips: ['AWS Bedrock', 'Lambda', 'EKS', 'Terraform', 'CI/CD'],
  },
  {
    period: 'JUN 2024 — AUG 2024',
    title: 'AI Engineer Intern',
    company: 'Siemens Digital Industries Software',
    desc: 'Optimized GPU-based LLM inference for CodeLlama 34B/70B — improving latency for AI-assisted code understanding on enterprise C++ codebases.',
    bullets: [
      'Static code analysis in Coverity; 15+ custom Codexm checkers',
      '20% maintainability uplift across large-scale C++',
    ],
    chips: ['CodeLlama', 'C++', 'Coverity', 'GPU Optimization'],
  },
  {
    period: 'JUN 2024 — AUG 2024',
    title: 'AI Engineer Intern',
    company: 'Systematic Ventures',
    desc: 'RAG financial-intelligence system combining scraping, embeddings and FAISS semantic search across 3,500+ datasets.',
    bullets: [
      'Vector index with 1M+ embeddings',
      'RAGAS evaluation score of 0.72',
    ],
    chips: ['RAG', 'LangChain', 'FAISS', 'Embeddings'],
  },
  {
    period: 'SEP 2024 — JAN 2025',
    title: 'Teaching Assistant · NLP',
    company: 'NYU Courant',
    desc: 'Taught 150 students; supervised 9 project teams on HMMs, MT, POS/NER pipelines, semantic role labeling with NLTK and spaCy.',
  },
];

const Experience = () => (
  <section className="section" id="experience">
    <div className="section-inner">
      <div className="xp-grid">
        <div className="xp-sticky">
          <div className="section-label reveal">02 · Work</div>
          <h2 className="section-title reveal d1" style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
            Trajectory.
          </h2>
          <p className="section-sub reveal d2" style={{ marginTop: 20 }}>
            Five years across finance, enterprise software, and research — always at the LLM +
            cloud seam.
          </p>
        </div>

        <div className="xp-timeline">
          {items.map((it, idx) => (
            <div key={idx} className={`xp-item${it.current ? ' current' : ''} reveal`}>
              <div className="xp-period">
                {it.current && <span className="badge">NOW</span>}
                {it.period}
              </div>
              <h3 className="xp-title">{it.title}</h3>
              <div className="xp-company">{it.company}</div>
              <p className="xp-desc">{it.desc}</p>
              {it.bullets && (
                <ul className="xp-bullets">
                  {it.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
              {it.chips && (
                <div className="chips">
                  {it.chips.map((c) => (
                    <span className="chip" key={c}>
                      {c}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
