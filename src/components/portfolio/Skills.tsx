type SkillGroup = { icon: string; title: string; items: string[]; delay?: string };

const groups: SkillGroup[] = [
  {
    icon: '{ }',
    title: 'Languages',
    items: ['Python', 'C++', 'Java', 'JavaScript', 'SQL'],
  },
  {
    icon: 'AI',
    title: 'LLM & GenAI',
    items: [
      'LangChain',
      'LangGraph',
      'OpenAI API',
      'Azure AI Foundry',
      'AWS Bedrock',
      'Gemini / Llama',
    ],
    delay: 'd1',
  },
  {
    icon: '☁',
    title: 'Cloud',
    items: ['AWS Lambda', 'ECS / EKS', 'S3 · DynamoDB', 'RDS · Postgres', 'Redis'],
    delay: 'd2',
  },
  {
    icon: 'Fw',
    title: 'Frameworks',
    items: ['FastAPI', 'Node.js', 'React', 'n8n'],
    delay: 'd3',
  },
  {
    icon: '∞',
    title: 'Infra / DevOps',
    items: ['Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
    delay: 'd4',
  },
];

const Skills = () => (
  <section className="section" id="skills">
    <div className="section-inner">
      <div className="section-head">
        <div>
          <div className="section-label reveal">04 · Stack</div>
          <h2 className="section-title reveal d1">Tools of the trade.</h2>
        </div>
        <p className="section-sub reveal d2">
          The frameworks, cloud services and infrastructure I ship production AI with.
        </p>
      </div>

      <div className="skill-orbits">
        {groups.map((g) => (
          <div key={g.title} className={`skill-card reveal${g.delay ? ' ' + g.delay : ''}`}>
            <div className="skill-card-head">
              <div className="skill-icon">{g.icon}</div>
              <div className="skill-title">{g.title}</div>
            </div>
            <div className="skill-list">
              {g.items.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
